let slideIndex = 1;
let modalName = '#magazine';

// Open Modal Functions
function openModal(modalId) {
	slideIndex = 1;
	modalName = modalId;
	showSlides(slideIndex, modalId);
	console.log(modalId);
	$(modalId).css('display', 'block');
}

// Close the Modal X
function closeModal(modalName) {
	$(modalName).css('display', 'none');
}

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n, modalName);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n, modalName);
}

function showSlides(n, modalId) {
	let slides = document.querySelectorAll(modalId + " .slides");
	let dots = $(modalId + ' .thumbnail')
	let captionText = document.getElementById("caption");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (let i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	captionText.innerHTML = dots[slideIndex - 1].alt;
}
