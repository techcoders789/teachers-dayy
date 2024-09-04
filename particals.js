document.addEventListener('DOMContentLoaded', () => {
    const createParticles = () => {
        const numParticles = 100;
        const particleColor = '#ff007f'; // Dark pink color

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.backgroundColor = particleColor;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            document.body.appendChild(particle);

            setTimeout(() => {
                particle.style.top = '100vh';
            }, 0);
        }
    };

    createParticles();
});
