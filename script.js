const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join(1).split('');
const errors = ["ERROR 404", "SYSTEM FAILURE", "ACCESS DENIED", "CRITICAL ERROR", "MALFUNCTION"];

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = '15pt monospace';

    letters.map((y, index) => {
        const text = String.fromCharCode(65 + Math.random() * 33);
        const x = index * 15;
        ctx.fillText(text, x, y);
        letters[index] = y > 758 + Math.random() * 1e4 ? 0 : y + 15;
    });

    // Randomly display error messages
    if (Math.random() > 0.95) {
        ctx.fillStyle = 'red';
        ctx.font = '20pt monospace';
        const errorText = errors[Math.floor(Math.random() * errors.length)];
        const errorX = Math.random() * canvas.width;
        const errorY = Math.random() * canvas.height;
        ctx.fillText(errorText, errorX, errorY);
    }
};

setInterval(draw, 33);
