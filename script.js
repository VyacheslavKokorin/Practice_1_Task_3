const images = [
	'images/pic1.jpg',
	'images/pic2.jpg',
	'images/pic3.jpg',
	'images/pic4.jpg',
	'images/pic5.jpg',
	'images/pic6.jpg',
	'images/pic7.jpg',
	'images/pic8.jpg',
	'images/pic9.jpg',
	'images/pic10.jpg',
];

let currentIndex = 0;

const img = document.getElementById('image');
const prevBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');

function changeImage(index) {
	img.src = images[index];
}

prevBtn.addEventListener('click', function() {
	currentIndex = (currentIndex - 1 + images.length) % images.length;
	changeImage(currentIndex);
});

nextBtn.addEventListener('click', function() {
	currentIndex = (currentIndex + 1) % images.length;
	changeImage(currentIndex);
})