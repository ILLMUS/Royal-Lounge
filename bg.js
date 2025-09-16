const canvas = document.getElementById('royal-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Cloud particles
const cloudCount = 200;
const clouds = [];

for (let i = 0; i < cloudCount; i++) {
  clouds.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: 50 + Math.random() * 150,
    color: randomColor(),
    speed: 0.1 + Math.random() * 0.3
  });
}

function randomColor() {
  // Dominated by black 60%, gold 20%, rest 20%
  const rand = Math.random();
  if (rand < 0.6) return 'rgba(0,0,0,0.6)';
  else if (rand < 0.8) return 'rgba(255,215,0,0.4)';
  else {
    const colors = ['rgba(255,0,0,0.3)','rgba(0,0,255,0.3)','rgba(0,255,0,0.3)','rgba(255,255,0,0.3)'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

// Track mouse
let mouse = { x: null, y: null };
canvas.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

// Animation loop
function animate() {
  ctx.clearRect(0, 0, width, height);

  clouds.forEach(cloud => {
    cloud.x += cloud.speed;
    if (cloud.x - cloud.radius > width) cloud.x = -cloud.radius;

    // Draw cloud
    const gradient = ctx.createRadialGradient(cloud.x, cloud.y, cloud.radius*0.2, cloud.x, cloud.y, cloud.radius);
    gradient.addColorStop(0, cloud.color);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI*2);
    ctx.fill();

    // Mouse ripple effect
    if(mouse.x !== null && mouse.y !== null){
      const dx = cloud.x - mouse.x;
      const dy = cloud.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 150){
        cloud.x += dx*0.002; // small displacement effect
        cloud.y += dy*0.002;
      }
    }
  });

  requestAnimationFrame(animate);
}

animate();

// Handle resize
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top + window.scrollY; // account for scroll
});
