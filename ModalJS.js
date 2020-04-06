/**(function(){
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

})();**/

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
     * @param {*} btn_open_modals : Tous les boutons d'ouverture des modals
     **/
    init = function() {
        this.btn_modal_opens = document.querySelectorAll(this.btn_open_class);
        this.intialize_event();
    }

    /**
     * Enregistre un tableaux des bouton d'ouverture des modals
     **/
    intialize_event = function() {
        for(let i = 0; i < this.btn_modal_opens.length; i++) {
            this.btn_modal_opens[i].addEventListener('click', this.openModal);
        }
    }

    /**
     * Ouvre la modal et ajoute l'événement au bouton close de la modal
     * 
     * @param {Event} event 
     **/
    openModal = function(event) {
        event.preventDefault();
        const btn = event.target;
        const modal_name = btn.getAttribute('data-id-modal');
        const modal = document.querySelector('#' + modal_name);
        const modal_btn_close = modal.querySelector('.modal_btn_close');
        modal.classList.toggle('open');
        modal.setAttribute('data-hidden', 'false');
        modal_btn_close.addEventListener('click', this.closeModal);
    }

    closeModal = function(event) {
        // Ferme la modal
        // Reset du data-hidden
        // supprime l'événement sur le bouton close de la modal
        event.preventDefault();
        console.log(event.target);
    }
}