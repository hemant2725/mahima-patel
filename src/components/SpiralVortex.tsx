import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const feedbackFragmentShader = `
precision mediump float;
uniform sampler2D u_prevFrame;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_mouseActive;
varying vec2 v_uv;

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float spiralPattern(vec2 uv, float t, float morph) {
  return 0.0;
}

float warpedSpiral(vec2 uv, float t, float m) {
  float angle = atan(uv.y, uv.x);
  float r = length(uv);
  float spiral = sin(angle * 3.0 + r * 12.0 - t * 2.0 + m * 6.0);
  float arms = sin(angle * 5.0 + r * 8.0 + t * 1.5);
  return spiral * 0.6 + arms * 0.4;
}

void main() {
  vec2 p = v_uv * 2.0 - 1.0;
  p.x *= u_resolution.x / u_resolution.y;

  float t = u_time * 0.15;
  float mt = u_time * 0.3;
  float morph = sin(mt) * 0.5 + 0.5;

  if (u_mouseActive > 0.5) {
    vec2 mousePos = u_mouse * 2.0 - 1.0;
    mousePos.x *= u_resolution.x / u_resolution.y;
    float mouseDist = length(p - mousePos);
    float mouseInfluence = smoothstep(1.0, 0.0, mouseDist) * 0.3;
    p += (mousePos - p) * mouseInfluence * morph;
    p *= rot(mouseInfluence * 2.0);
  }

  float dist = length(p);
  p *= 1.0 + dist * dist * 0.15;

  vec3 prev = texture2D(u_prevFrame, v_uv).rgb;

  vec2 feedbackUV = v_uv;
  feedbackUV += (p * 0.5 + 0.5 - v_uv) * (0.03 + morph * 0.02);
  float swirl = sin(v_uv.x * 10.0 + t) * cos(v_uv.y * 10.0 - t) * 0.5 + 0.5;
  feedbackUV += vec2(cos(swirl * 6.28 + t), sin(swirl * 6.28 - t)) * 0.015;

  vec2 feedbackUVmirrored = 1.0 - feedbackUV;
  feedbackUV = mix(feedbackUV, feedbackUVmirrored, morph * 0.3);
  feedbackUV = clamp(feedbackUV, 0.0, 1.0);

  vec3 feedback = texture2D(u_prevFrame, feedbackUV).rgb;
  feedback = mix(feedback, feedback * vec3(1.0, 0.85, 0.6), 0.15);

  float centerGlow = smoothstep(0.8, 0.0, dist) * 0.08;
  feedback += centerGlow;
  feedback *= 0.92;

  gl_FragColor = vec4(feedback, 1.0);
}
`;

const displayFragmentShader = `
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_mouseActive;
uniform sampler2D u_feedbackTexture;
varying vec2 v_uv;

mat2 rot(float a) {
  float c = cos(a), s = sin(a);
  return mat2(c, -s, s, c);
}

float warpedSpiral(vec2 uv, float t, float m) {
  float angle = atan(uv.y, uv.x);
  float r = length(uv);
  float spiral = sin(angle * 3.0 + r * 12.0 - t * 2.0 + m * 6.0);
  float arms = sin(angle * 5.0 + r * 8.0 + t * 1.5);
  return spiral * 0.6 + arms * 0.4;
}

void main() {
  vec3 colorA = vec3(0.831, 0.659, 0.325);
  vec3 colorB = vec3(0.102, 0.102, 0.102);

  vec2 uv = v_uv;
  vec2 p = uv;
  p = p * 2.0 - 1.0;
  p.x *= u_resolution.x / u_resolution.y;

  vec2 mouse = u_mouse;
  mouse = mouse * 2.0 - 1.0;
  mouse.x *= u_resolution.x / u_resolution.y;

  float mouseDist = length(p - mouse);
  float mouseInfluence = smoothstep(0.5, 0.0, mouseDist);

  float t = u_time;
  float mt = u_time * 0.3;
  float morph = sin(mt) * 0.5 + 0.5;

  p += (mouse - p) * mouseInfluence * 0.2 * (1.0 + u_mouseActive);

  float dist = length(p);
  p *= 1.0 + dist * dist * 0.1;

  float angle = atan(p.y, p.x);
  float r = length(p);
  float teeth = step(0.5, fract(angle * 8.0 / 6.28318)) * step(0.3, r);

  vec3 feedbackColor = texture2D(u_feedbackTexture, uv).rgb;

  float pattern1 = sin(angle * 10.0 + r * 15.0 - t * 2.0);
  float pattern2 = cos(angle * 8.0 - r * 12.0 + t * 1.5);
  float radialPattern = pattern1 * 0.5 + pattern2 * 0.5;

  float spiral = warpedSpiral(p, t * 0.5, morph);
  float spiralMask = smoothstep(-0.5, 0.5, spiral);
  vec3 spiralColor = mix(colorB, colorA, spiralMask);

  vec2 polarUV = vec2(angle / 6.28318 + 0.5, r);
  polarUV *= 15.0;

  float lines = sin(polarUV.x * 6.28318 + polarUV.y * 5.0 - t) * 0.5 + 0.5;
  lines = smoothstep(0.4, 0.6, lines);

  float wave = sin(p.x * 10.0 + t) * cos(p.y * 10.0 - t);
  float waveMask = smoothstep(-0.5, 0.5, wave);

  vec3 waveColor = mix(colorA, colorB, waveMask);

  float organicPulse = sin(r * 10.0 - t * 3.0) * 0.5 + 0.5;
  organicPulse *= waveMask;

  float morphWave = sin(morph * 3.14159);

  vec3 finalColor = mix(waveColor, spiralColor, morphWave);
  finalColor = mix(finalColor, colorA, lines * 0.5);
  finalColor += vec3(0.05) * teeth * (1.0 - morphWave);
  finalColor += colorB * organicPulse * 0.3;
  finalColor += feedbackColor * 0.15;

  float accent = sin(r * 20.0 - t * 2.0) * 0.5 + 0.5;
  accent = smoothstep(0.3, 0.7, accent);
  finalColor += mix(colorA, colorB, accent) * 0.1;

  float vignette = 1.0 - smoothstep(0.5, 1.5, dist);
  finalColor *= vignette;
  finalColor = pow(finalColor, vec3(0.9));

  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export default function SpiralVortex() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio, 2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClear = false;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Camera
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Geometry
    const geometry = new THREE.PlaneGeometry(2, 2);

    // Custom position attribute for the vertex shader
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);
    geometry.setAttribute('a_position', new THREE.BufferAttribute(positions, 2));

    // FBOs
    const fboOptions: THREE.RenderTargetOptions = {
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      depthBuffer: false,
      stencilBuffer: false,
    };

    const fbos = [
      new THREE.WebGLRenderTarget(window.innerWidth * dpr, window.innerHeight * dpr, fboOptions),
      new THREE.WebGLRenderTarget(window.innerWidth * dpr, window.innerHeight * dpr, fboOptions),
    ];

    // Feedback material
    const feedbackMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: feedbackFragmentShader,
      uniforms: {
        u_prevFrame: { value: fbos[0].texture },
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth * dpr, window.innerHeight * dpr) },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        u_mouseActive: { value: 0 },
      },
    });

    // Display material
    const displayMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: displayFragmentShader,
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth * dpr, window.innerHeight * dpr) },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
        u_mouseActive: { value: 0 },
        u_feedbackTexture: { value: fbos[0].texture },
      },
    });

    // Scenes
    const feedbackScene = new THREE.Scene();
    const feedbackMesh = new THREE.Mesh(geometry, feedbackMaterial);
    feedbackScene.add(feedbackMesh);

    const displayScene = new THREE.Scene();
    const displayMesh = new THREE.Mesh(geometry.clone(), displayMaterial);
    displayScene.add(displayMesh);

    let currentFBO = 0;

    // Animation loop
    const animate = (time: number) => {
      const readFBO = fbos[currentFBO];
      const writeFBO = fbos[1 - currentFBO];

      // Update uniforms
      const timeSec = time * 0.001;
      feedbackMaterial.uniforms.u_prevFrame.value = readFBO.texture;
      feedbackMaterial.uniforms.u_time.value = timeSec;
      displayMaterial.uniforms.u_time.value = timeSec;
      displayMaterial.uniforms.u_feedbackTexture.value = writeFBO.texture;

      // Mouse
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      feedbackMaterial.uniforms.u_mouse.value.set(mouseX, mouseY);
      displayMaterial.uniforms.u_mouse.value.set(mouseX, mouseY);
      feedbackMaterial.uniforms.u_mouseActive.value = mouseRef.current.active;
      displayMaterial.uniforms.u_mouseActive.value = mouseRef.current.active;

      // Feedback pass
      renderer.setRenderTarget(writeFBO);
      renderer.clear();
      renderer.render(feedbackScene, camera);

      // Display pass
      renderer.setRenderTarget(null);
      renderer.clear();
      renderer.render(displayScene, camera);

      currentFBO = 1 - currentFBO;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Mouse handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX / window.innerWidth;
      mouseRef.current.y = 1.0 - e.clientY / window.innerHeight;
      mouseRef.current.active = 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const newDpr = w < 768 ? 1 : Math.min(window.devicePixelRatio, 2);

      renderer.setSize(w, h);
      renderer.setPixelRatio(newDpr);

      fbos[0].setSize(w * newDpr, h * newDpr);
      fbos[1].setSize(w * newDpr, h * newDpr);

      feedbackMaterial.uniforms.u_resolution.value.set(w * newDpr, h * newDpr);
      displayMaterial.uniforms.u_resolution.value.set(w * newDpr, h * newDpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      feedbackMaterial.dispose();
      displayMaterial.dispose();
      fbos[0].dispose();
      fbos[1].dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
