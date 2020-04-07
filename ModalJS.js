/**
 * 
 * ModalJS : Boîte de dialog Javascript
 * 
 * @property {string} selected_class : Classe qui selectionne les modals
 * @property {string} width : Taille de la modal en pourcentage css
 * @property {string} height : Hauteur de la modal en pourcentage css
 * @property {string} btn_open_modal : Class css du bouton qui ouvre la modal
 * @property {string} btn_modal_close : Class css du bouton qui ferme la modal
 * @property {Object} eventHandler : Object contenant les événements de la modal
 * @property {HTMLElement} active_modal : Enregistre la modal active
 **/
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
        this.eventHandler = {};
        this.active_modal = null;
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
            this.btn_modal_opens[i].addEventListener('click', this.event_openModal.bind(this));
        }
    }

    /**
     * Ouvre la modal et ajoute l'événement au bouton close de la modal
     * 
     * @param {Event} event 
     **/
    event_openModal = function(event) {
        event.preventDefault();

        let btn = event.target;
        let modal_name = btn.getAttribute('data-id-modal');

        this.active_modal = document.querySelector('#' + modal_name);

        // Change property modal
        this.active_modal.classList.toggle('open');
        this.active_modal.setAttribute('aria-hidden', 'false');

        // Register event
        this.eventHandler.btn_close = this.event_closeModal.bind(this);
        this.eventHandler.escape_close = this.event_escape_close.bind(this);
        
        this.active_modal.querySelector(this.btn_modal_close).addEventListener('click', this.eventHandler.btn_close);
        window.addEventListener("keyup", this.eventHandler.escape_close);
    }

    /**
     * Evénement du bouton close
     * @param {Event} event
     **/
    event_closeModal = (event) => {
        event.preventDefault();
        this.closeModal();
    }

    event_escape_close = (event) => {
        event.preventDefault();

        if(event.keyCode == 27) {
            this.closeModal();
        }
    };

    /**
     * @param {HTMLElement} modal
     **/
    closeModal = () => {
        this.active_modal.classList.remove('open');
        this.active_modal.setAttribute('aria-hidden', true);
        this.clearEvent();
    }

    /**
     * On nettoie les événements de la modal et supprime les événement enregistrer dans le tableaux
     * Supprime les événement créer sur la fenêtre modal à l'ouverture
     * 
     * @param {HTMLElement} modal
     **/
    clearEvent = () => {
        this.active_modal.querySelector(this.btn_modal_close).removeEventListener('click', this.eventHandler.btn_close);
        window.removeEventListener("keyup", this.eventHandler.escape_close);

        delete this.eventHandler.btn_close;
        delete this.eventHandler.escape_close;

        //delete this.eventHandler.escape_close;
        this.active_modal = null;
    }
}