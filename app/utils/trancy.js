// source: http://codepen.io/calebjeffrey/pen/IHuhL
export default function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var W = window.innerWidth, H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  var particles = [];
  var mouse = {};

  var particleCount = 500;
  for (var i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  canvas.addEventListener('mousemove', trackMouse, false);

  function trackMouse(e) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
  }

  function Particle() {
    this.speed = {
      x: -2.5 + Math.random() * 5,
      y: 15 + Math.random() * 10
    };

    if (mouse.x && mouse.y) {
      this.location = { x: mouse.x, y: mouse.y };
    } else {
      this.location = { x: W/2, y: H/2 };
    }

    this.radius = 10 + Math.random() * 40;
    this.life = 20 + Math.random() * 50;
    this.remainingLife = this.life;
    this.r = Math.round(Math.random() * 255);
    this.g = Math.round(Math.random() * 255);
    this.b = Math.round(Math.random() * 255);
  }

  function draw() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      ctx.beginPath();
      p.opacity = Math.round(p.remainingLife / p.life * 100) / 100;
      var gradient = ctx.createRadialGradient(
        p.location.x,
        p.location.y,
        0,
        p.location.x,
        p.location.y,
        p.radius
      );

      gradient.addColorStop(0, 'rgba('+p.r+', '+p.g+', '+p.b+', '+p.opacity+')');
      gradient.addColorStop(0.5, 'rgba('+p.r+', '+p.g+', '+p.b+', '+p.opacity+')');
      gradient.addColorStop(1, 'rgba('+p.r+', '+p.g+', '+p.b+', 0)');

      ctx.fillStyle = gradient;
      ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
      ctx.fill();

      p.remainingLife--;
      p.radius--;
      p.location.x += p.speed.x;
      p.location.y += p.speed.y;

      if (p.remainingLife < 0 || p.radius < 0) {
        particles[i] = new Particle();
      }
    }
  }

  window.setInterval(draw, 33);
}
