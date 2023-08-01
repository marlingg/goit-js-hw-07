import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);
  return listItem;
}

function openLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true, 
    captionsData: 'alt', 
    captionDelay: 250,
    closeText: '×'
  });
}

galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

window.addEventListener('load', openLightbox);
