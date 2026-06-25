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
          const posX = x * espacamento;
          const posY = (y * espacamento) + Math.sin(x * 0.3 + y * 0.1 + tempo) * 30;

          ctx.beginPath();
          ctx.arc(posX, posY, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(124, 58, 237, 0.4)';
          ctx.fill();
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
