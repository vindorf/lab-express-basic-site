const btn = document.querySelector('#btn');
const sec = document.querySelector('#sec');
btn.addEventListener('click', () => {
    sec.removeAttribute('hidden');
});