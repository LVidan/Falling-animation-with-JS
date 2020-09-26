function makeHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🤖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000)
}

setInterval(makeHeart, 300);

