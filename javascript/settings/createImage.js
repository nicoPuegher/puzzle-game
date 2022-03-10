const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const image = new Image();
image.src = '../../image/dog.jpg';

let imagePieces;

const createImage = (size) => {
  imagePieces = [];
  const td = document.querySelector('td');
  const imageSize = image.width / size;

  canvas.width = td.offsetWidth;
  canvas.height = td.offsetHeight;

  for (let row = 0; row < size; ++row) {
    for (let column = 0; column < size; ++column) {
      context.drawImage(
        image,
        imageSize * column,
        imageSize * row,
        imageSize,
        imageSize,
        0,
        0,
        canvas.width,
        canvas.height
      );

      imagePieces.push(canvas.toDataURL());
    }
  }

  imagePieces.splice(imagePieces[0], 0, '');
};

export default createImage;
export { imagePieces };
