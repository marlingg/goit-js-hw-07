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
  image.setAttribute('data-source', item.original);

  link.appendChild(image);
  listItem.appendChild(link);
  return listItem;
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageSrc = event.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${imageSrc}" alt="Image">`);
  instance.show();
}

galleryItems.forEach(item => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});

galleryList.addEventListener('click', openModal);
