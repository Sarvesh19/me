"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MarsAnimation() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.9), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 2, 500);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Galaxy (static with slight pulsing)
    const galaxyParticles = 2000;
    const galaxyGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(galaxyParticles * 3);
    const colors = new Float32Array(galaxyParticles * 3);

    for (let i = 0; i < galaxyParticles; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 50;
      const spinAngle = radius * 0.1 + Math.random() * Math.PI * 2;
      const branchAngle = (i % 2 === 0 ? 1 : -1) * Math.PI * 0.5;

      positions[i3] = Math.cos(spinAngle + branchAngle) * radius;
      positions[i3 + 1] = (Math.random() - 0.5) * 5;
      positions[i3 + 2] = Math.sin(spinAngle + branchAngle) * radius;

      const color = new THREE.Color();
      const intensity = 1 - radius / 50;
      color.setHSL(0.6, 0.8, intensity);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.2,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
    galaxy.rotation.x = Math.PI / 4;
    scene.add(galaxy);

    // Background stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 500;
    const starPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000;
    }
    starsGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Camera position
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Animation (galaxy pulsing only)
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      // Update time for galaxy pulsing
      time += 0.02;
      galaxy.scale.setScalar(1 + Math.sin(time * 0.5) * 0.05);

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 0.9;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />;
}