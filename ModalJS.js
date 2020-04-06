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
    /**
     * @param {*} parameters 
     **/
    constructor(parameters) {
        this.selected_class = (typeof parameters.selected_class != 'undefined') ? parameters.selected_class : '.modal';
        this.width = (typeof parameters.width != 'undefined') ? parameters.width : '60%';
        this.height = (typeof parameters.height != 'undefined') ? parameters.height : '60%';
        this.btn_open_class = (typeof parameters.btn_open_class != 'undefined') ? parameters.btn_open_class : '.modal_btn_open';
        this.btn_modal_close = (typeof parameters.btn_modal_close != 'undefined') ? parameters.btn_modal_close : '.modal_btn_close';
    }

    /**
     * selectionne les modals qui sont dans la page
     * 
     * @param {*} modals
     * @param {*} btn_open_modals
     **/
    init = function() {
        this.btn_modal_opens = document.querySelectorAll(this.btn_open_class);
        this.intialize_event();
    }

    intialize_event = function() {
        for(let i = 0; i < this.modals.length; i++) {
            this.btn_modal_opens[i].addEventListener('click', function(event) {
                event.preventDefault();
                console.log('ouverture de la modal');
            });
        }
    }
}