const gallery = document.querySelector(".gallery");
const prevButton = gallery.querySelector(".prev");
const nextButton = gallery.querySelector(".next");
const images = gallery.querySelectorAll("img");
let currentImageIndex = 0;

function showImage(index) {
  images.forEach(image => image.classList.remove("active"));
  images[index].classList.add("active");
}

function prevImage() {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
}

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

prevButton.addEventListener("click", prevImage);
nextButton.addEventListener("click", nextImage);

showImage(currentImageIndex);
