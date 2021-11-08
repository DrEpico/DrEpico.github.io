const btn = document
    .querySelector('.read-more-btn');

const text = document   
    .querySelector('.read-more');

const cardHolder = document 
    .querySelector('.card-holder');

cardHolder
.addEventListener('onclick', e => {

    const current = e.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if (!isReadMoreBtn)
        return;

    const curerntText = e.target.parentNode.querySelector('.read-more');

    currentText.classList.toggle('read-more--open');

    current.textContent = current.textContent.includes('Read more...') ? 'Read less...' : 'Read more...';
})