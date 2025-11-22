const shareBtn = document.querySelector('.share');
const popup = document.querySelector('.share-popup');

shareBtn.addEventListener('click', () => {
    popup.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!shareBtn.contains(e.target) && !popup.contains(e.target)) {
        popup.classList.add('hidden');
    }
});
