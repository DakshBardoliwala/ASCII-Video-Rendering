// No. of chars = 36
// const density = "Ñ@W$ab0O9865432%1ic#7?+=^!*~;:,_.`- ";

const density = "Ñ@W$ab0O9865432%1ic#7?+=^!*~;:,_.`-  ";
const len = density.length;

let video;
let div;

function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(128, 96);
  div = createDiv();
}

function draw() {
  video.loadPixels();
  let image = "<pre>";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      
      const avg = (0.299 * r) + (0.587 * g) + (0.114 * b);
      const charIndex = floor(map(avg, 0, 255, len, 0));

      const c = density.charAt(charIndex);
      image += c;
    }
    image += '<br/>';
  }
  image = image + "</pre>";
  div.html(image);
}
