import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const container = document.querySelector('.gallery');
const itemsMarkup = createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', itemsMarkup);

// rendered items
function createMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`
  }).join('');
}

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});