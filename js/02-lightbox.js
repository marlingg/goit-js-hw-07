import { galleryItems } from './gallery-items.js';

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

function initializeGallery() {
  const galleryList = document.querySelector('.gallery');

  const galleryItemsElements = galleryItems.map(item => createGalleryItem(item));
  galleryList.append(...galleryItemsElements);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    closeText: '×'
  });
}

window.addEventListener('DOMContentLoaded', initializeGallery);
