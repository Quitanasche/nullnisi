// Assuming 'img' is of type HTMLImageElement and already created or selected from the DOM
function setImageSource(img: HTMLImageElement, src: string): void {
  if (!src) {
    console.error("No source provided for the image.");
    return;
  }

  // Preloading the image to avoid flickering
  const imageLoader = new Image();
  imageLoader.onload = () => {
    img.src = src;
  };
  imageLoader.onerror = () => {
    console.error("Error loading the image.");
  };
  imageLoader.src = src;
}

// Usage
const imgElement = document.getElementById('imageId') as HTMLImageElement;
setImageSource(imgElement, 'path/to/image.jpg');
