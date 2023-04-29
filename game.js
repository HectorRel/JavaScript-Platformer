const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// let bottom = Player.position.y + height;

canvas.width = 64 * 16;
canvas.height = 64 * 9;

c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

const player = new Player;

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    player.velocity.x = 0;
    if (keys.a.pressed === true) {
        player.velocity.x = -4;
    } else if (keys.d.pressed === true) {
        player.velocity.x = 4;
    }
    player.draw();
    player.update();
}

animate();

