import { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh, Triangle, Color } from "ogl";

const vertexShader = /* glsl */ `
  attribute vec2 uv;
  attribute vec3 position;
  
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform vec3 uResolution;
  uniform vec2 uFocal;
  uniform vec2 uRotation;
  uniform float uStarSpeed;
  uniform float uDensity;
  uniform float uHueShift;
  uniform float uSpeed;
  uniform vec2 uMouse;
  uniform float uGlowIntensity;
  uniform float uSaturation;
  uniform bool uMouseRepulsion;
  uniform float uTwinkleIntensity;
  uniform float uRotationSpeed;
  uniform float uRepulsionStrength;
  uniform float uMouseActiveFactor;
  uniform float uAutoCenterRepulsion;
  uniform bool uTransparent;
  
  varying vec2 vUv;
  
  // Hash function for random numbers
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  // Noise function
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  
  // HSV to RGB conversion
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 st = (uv - 0.5) * 2.0;
    st.x *= uResolution.z;
    
    // Apply rotation
    float angle = uTime * uRotationSpeed + atan(uRotation.y, uRotation.x);
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    st = rot * st;
    
    // Mouse repulsion effect
    vec2 mousePos = uMouse * 2.0 - 1.0;
    mousePos.x *= uResolution.z;
    
    if (uMouseRepulsion && uMouseActiveFactor > 0.0) {
      vec2 mouseDir = st - mousePos;
      float mouseDist = length(mouseDir);
      if (mouseDist < 1.0) {
        st += normalize(mouseDir) * (1.0 - mouseDist) * uRepulsionStrength * uMouseActiveFactor;
      }
    }
    
    // Create star field
    vec3 color = vec3(0.0);
    
    for (int i = 0; i < 3; i++) {
      float layer = float(i);
      vec2 layerSt = st * (1.0 + layer * 0.5) * uDensity;
      layerSt += vec2(uTime * uStarSpeed * (1.0 + layer * 0.2));
      
      vec2 grid = floor(layerSt);
      vec2 frac = fract(layerSt);
      
      float starHash = hash(grid + layer * 100.0);
      
      if (starHash > 0.95) {
        vec2 starPos = frac - 0.5;
        float starDist = length(starPos);
        
        // Star brightness with twinkle
        float brightness = 1.0 - starDist * 2.0;
        brightness = max(0.0, brightness);
        brightness = pow(brightness, 2.0);
        
        // Twinkle effect
        if (uTwinkleIntensity > 0.0) {
          float twinkle = sin(uTime * 10.0 + starHash * 100.0) * 0.5 + 0.5;
          brightness *= mix(0.5, 1.0, twinkle * uTwinkleIntensity);
        }
        
        // Star color with hue shift
        float hue = (starHash + uHueShift / 360.0);
        hue = fract(hue);
        vec3 starColor = hsv2rgb(vec3(hue, uSaturation, brightness));
        
        // Glow effect
        float glow = exp(-starDist * 8.0) * uGlowIntensity;
        starColor += vec3(glow);
        
        color += starColor * (1.0 - layer * 0.3);
      }
    }
    
    // Auto center repulsion
    if (uAutoCenterRepulsion > 0.0) {
      float centerDist = length(st);
      color *= mix(1.0, 1.0 - centerDist * 0.5, uAutoCenterRepulsion);
    }
    
    if (uTransparent) {
      gl_FragColor = vec4(color, max(color.r, max(color.g, color.b)));
    } else {
      gl_FragColor = vec4(color, 1.0);
    }
  }
`;

export default function Galaxy({
    focal = [0.5, 0.5],
    rotation = [1.0, 0.0],
    starSpeed = 0.5,
    density = 1,
    hueShift = 140,
    disableAnimation = false,
    speed = 1.0,
    mouseInteraction = true,
    glowIntensity = 0.3,
    saturation = 0.0,
    mouseRepulsion = true,
    repulsionStrength = 2,
    twinkleIntensity = 0.3,
    rotationSpeed = 0.1,
    autoCenterRepulsion = 0,
    transparent = true,
    ...rest
}) {
  const ctnDom = useRef(null);
  const targetMousePos = useRef({ x: 0.5, y: 0.5 });
  const smoothMousePos = useRef({ x: 0.5, y: 0.5 });
  const targetMouseActive = useRef(0.0);
  const smoothMouseActive = useRef(0.0);

  useEffect(() => {
    if (!ctnDom.current) return;
    const ctn = ctnDom.current;
    const renderer = new Renderer({
      alpha: transparent,
      premultipliedAlpha: false,
    });
    const gl = renderer.gl;

    if (transparent) {
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
    } else {
      gl.clearColor(0, 0, 0, 1);
    }

    let program;

    function resize() {
      const scale = 1;
      renderer.setSize(ctn.offsetWidth * scale, ctn.offsetHeight * scale);
      if (program) {
        program.uniforms.uResolution.value = new Color(
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height
        );
      }
    }
    window.addEventListener("resize", resize, false);
    resize();

    const geometry = new Triangle(gl);
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uFocal: { value: new Float32Array(focal) },
        uRotation: { value: new Float32Array(rotation) },
        uStarSpeed: { value: starSpeed },
        uDensity: { value: density },
        uHueShift: { value: hueShift },
        uSpeed: { value: speed },
        uMouse: {
          value: new Float32Array([
            smoothMousePos.current.x,
            smoothMousePos.current.y,
          ]),
        },
        uGlowIntensity: { value: glowIntensity },
        uSaturation: { value: saturation },
        uMouseRepulsion: { value: mouseRepulsion },
        uTwinkleIntensity: { value: twinkleIntensity },
        uRotationSpeed: { value: rotationSpeed },
        uRepulsionStrength: { value: repulsionStrength },
        uMouseActiveFactor: { value: 0.0 },
        uAutoCenterRepulsion: { value: autoCenterRepulsion },
        uTransparent: { value: transparent },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    let animateId;

    function update(t) {
      if (disableAnimation) {
        // Static render - only render once
        renderer.render({ scene: mesh });
        return;
      }
      
      animateId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      program.uniforms.uStarSpeed.value = (t * 0.001 * starSpeed) / 10.0;

      const lerpFactor = 0.05;
      smoothMousePos.current.x +=
        (targetMousePos.current.x - smoothMousePos.current.x) * lerpFactor;
      smoothMousePos.current.y +=
        (targetMousePos.current.y - smoothMousePos.current.y) * lerpFactor;

      smoothMouseActive.current +=
        (targetMouseActive.current - smoothMouseActive.current) * lerpFactor;

      program.uniforms.uMouse.value[0] = smoothMousePos.current.x;
      program.uniforms.uMouse.value[1] = smoothMousePos.current.y;
      program.uniforms.uMouseActiveFactor.value = smoothMouseActive.current;

      renderer.render({ scene: mesh });
    }
    
    if (disableAnimation) {
      // For static mode, render once
      update(0);
    } else {
      animateId = requestAnimationFrame(update);
    }
    
    ctn.appendChild(gl.canvas);

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      targetMousePos.current = { x, y };
      targetMouseActive.current = 1.0;
    }

    function handleMouseLeave() {
      targetMouseActive.current = 0.0;
    }

    if (mouseInteraction && !disableAnimation) {
      ctn.addEventListener("mousemove", handleMouseMove);
      ctn.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (animateId) {
        cancelAnimationFrame(animateId);
      }
      window.removeEventListener("resize", resize);
      if (mouseInteraction && !disableAnimation) {
        ctn.removeEventListener("mousemove", handleMouseMove);
        ctn.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (ctn.contains(gl.canvas)) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [
    focal,
    rotation,
    starSpeed,
    density,
    hueShift,
    disableAnimation,
    speed,
    mouseInteraction,
    glowIntensity,
    saturation,
    mouseRepulsion,
    twinkleIntensity,
    rotationSpeed,
    repulsionStrength,
    autoCenterRepulsion,
    transparent,
  ]);

  return <div ref={ctnDom} className="w-full h-full relative" {...rest} />;
}