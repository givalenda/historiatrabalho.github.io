document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const moreInfoSections = document.querySelectorAll('.more-info');

    readMoreBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            moreInfoSections[index].style.display = 'block';
            btn.style.display = 'none'; // Ocultar o botão após clicar
        });
    });
});