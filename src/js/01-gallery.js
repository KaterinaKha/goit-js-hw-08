// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItemElement = document.querySelector('.gallery');
galleryItemElement.style.listStyle = 'none';

galleryItemElement.insertAdjacentHTML(
  'beforeend',
  createGalleryItem(galleryItems)
);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <li class='gallery__item'>
		<a class='gallery__link' href='${original}'>
	<img 
      class='gallery__image' 
      src='${preview}'
      alt='${description}' />
		</a>
	</li>`;
    })
    .join(' ');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
