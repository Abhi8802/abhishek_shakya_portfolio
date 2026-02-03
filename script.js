// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Interactive web overlay effect
const createWebEffect = () => {
    const overlay = document.querySelector('.web-overlay');
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Update overlay gradient based on mouse position
    setInterval(() => {
        const gradients = `
            radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)
        `;
        overlay.style.backgroundImage = gradients;
    }, 100);
};

// Initialize web effect
createWebEffect();