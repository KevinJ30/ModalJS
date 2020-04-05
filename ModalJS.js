(function(){
    const btn_open = document.querySelector('a.modal_btn_open');
    const btn_close = document.querySelector('a.modal_btn_close');
    const modal_element = document.querySelector('.modal');

    const close_window = function(event) {
        event.preventDefault();
        modal_element.classList.remove('open');
        modal_element.setAttribute('aria-hidden', 'true');
    };

    btn_open.addEventListener('click', function(event) {
        event.preventDefault();
        modal_element.classList.toggle('open');
        modal_element.setAttribute('aria-hidden', 'false');

        // On ajoute un evenment sur la touche echap
        window.addEventListener('keyup', function(event) {
            console.log(event.keyCode);
            if(event.keyCode === 27) {
                close_window(event);
            }
        })
    });

    btn_close.addEventListener('click', function(event) {
        close_window(event);
    });

})();

class ModalJS {
    
    constructor(width = '60%', height = '60%') {
        this.width = width;
        this.height = height;
    }



}