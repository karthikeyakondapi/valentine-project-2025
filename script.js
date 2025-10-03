document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    // Make the No button reposition randomly when hovered
    noBtn.addEventListener('mouseover', () => {
        // Only run this if the screen is wide enough
        if (window.innerWidth > 600) {
            const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
            const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);

            // Apply the random position
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
        }
    });

    // Make the Yes button show a success message
    yesBtn.addEventListener('click', () => {
        const container = document.querySelector('.container');
        container.innerHTML = '<h1>🎉 YES! I LOVE YOU! 🎉</h1>';
        // Apply some additional neon glow to the success message
        const successH1 = container.querySelector('h1');
        successH1.style.color = '#00ff00'; // Green color
        successH1.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00';
    });
});