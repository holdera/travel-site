import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }
    events() {
        //clicking open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //clicking x close modal btn
        this.closeModalButton.click(this.closeModal.bind(this));

        //pushes escape key
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e){
        if ( e.keyCOde == 27 ) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}
export default Modal;