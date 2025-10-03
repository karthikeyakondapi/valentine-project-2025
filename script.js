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

    // Make the Yes button show the GIF and a success message
    yesBtn.addEventListener('click', () => {
        const container = document.querySelector('.container');
        
        // **UPDATED GIF LINK** (The reliable Giphy URL you provided)
        const gifSrc = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3hwZ3I4NmUxbHRsa2Q0M29jbno1anlyaXhoMDB2ejZ4ajJmN29yOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bYe23tbIFCnNRxTqkb/giphy.gif";

        // 1. Replace the entire content of the container with the GIF and message
        container.innerHTML = `
            <img src="${gifSrc}" alt="Success GIF" class="success-image">
            <h1 class="success-text">🎉 My Heart Said YES! I Love You! 🎉</h1>
        `;

        // 2. Hide the No button
        noBtn.style.display = 'none'; 
        
        // 3. Apply the neon styles to the new elements (inline styling)
        const successH1 = container.querySelector('.success-text');
        successH1.style.color = '#00ff00'; // Green text color
        successH1.style.textShadow = '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00';

        const successImage = container.querySelector('.success-image');
        successImage.style.maxWidth = '80vw'; 
        successImage.style.border = '5px solid #00ff00'; 
        successImage.style.boxShadow = '0 0 20px #00ff00'; 
        successImage.style.borderRadius = '10px';
        successImage.style.marginBottom = '20px';
    });
});