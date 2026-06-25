import React, { useEffect, useRef } from 'react';

export const FundoInterativo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animacaoId;

    const ajustarTamanho = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    ajustarTamanho();
    window.addEventListener('resize', ajustarTamanho);

    const espacamento = 30;
    const quantidadeX = 60;
    const quantidadeY = 40;
    let tempo = 0;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pontosNaLargura = Math.ceil(canvas.width / espacamento) + 2;
      const pontosNaAltura = Math.ceil(canvas.height / espacamento) + 2;

      for (let x = 0; x < pontosNaLargura; x++) {
        for (let y = 0; y < pontosNaAltura; y++) {
          const x3d = (x - pontosNaLargura / 2) * (espacamento * 3);
          const y3d = Math.sin(x * 0.3 + y * 0.1 + tempo) * 50;

          const z3d = y * espacamento;

          const distanciaDaCamera = 400;
          const escala = distanciaDaCamera / (distanciaDaCamera + z3d);

          const projecaoX = (canvas.width / 2) + x3d * escala;
          const projecaoY = (canvas.height * 0.2) + (y3d * escala) + (z3d * escala * 1.2);

          if (projecaoY >= 0 && projecaoY <= canvas.height) {
            ctx.beginPath();
            ctx.arc(projecaoX, projecaoY, 1.5 * escala, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(124, 58, 237, 0.4)';
            ctx.fill();
          }
        }
      }

      tempo += 0.05;
      animacaoId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', ajustarTamanho);
      cancelAnimationFrame(animacaoId);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: '#0c0c0e',
        pointerEvents: 'none'
      }}
    />
  )
};
