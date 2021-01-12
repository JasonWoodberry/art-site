// import * as dat from 'dat.gui';

export default {
  generate() {
    // const gui = new dat.GUI();
    const canvas = document.querySelector('canvas');
    const container = document.getElementById('canvasContainer');

    canvas.height = container.clientHeight;
    canvas.width = container.clientWidth;

    const c = canvas.getContext('2d');
    const wave = {
      y: canvas.height / 2,
      length: 0.01,
      amplitude: 100,
      frequency: 0.017,
    };

    const backgroundColor = {
      r: 245,
      g: 245,
      b: 245,
      a: 0.05,
    };

    let increment = wave.frequency;

    function animate() {
      requestAnimationFrame(animate);
      c.beginPath();
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, 0.0)`;
      c.moveTo(0, canvas.height / 2);

      // for (let i = 0; i < canvas.width; i += 1) {
      //   c.lineTo(i, wave.y + Math.sin(i * wave.length + increment)
      //   * wave.amplitude * Math.sin(increment));
      // }

      for (let i = 0; i < canvas.width; i += 1) {
        c.lineTo(i, wave.y + ((Math.sin(i * wave.length + increment)
        * wave.amplitude) / i) * 200);
      }

      c.strokeStyle = 'hsl(0, 50%, 0%)';
      c.stroke();
      increment += wave.frequency;


      c.beginPath();
      c.fillRect(0, 0, canvas.width, canvas.height);
      c.fillStyle = `rgba(${backgroundColor.r},
        ${backgroundColor.g}, ${backgroundColor.b}, 0.08)`;
      c.moveTo(0, canvas.height / 8);

      for (let i = 0; i < canvas.width; i += 1) {
        c.lineTo(i, (wave.y + 50) + Math.sin(i * 0.008 + increment)
        * 100 * Math.sin(increment));
      }
      c.strokeStyle = 'hsl(0, 52%, 0%)';
      c.stroke();
      increment += wave.frequency;
    }

    animate();
  },

};
