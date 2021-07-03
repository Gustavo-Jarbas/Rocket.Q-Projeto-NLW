export default function Modal(){
    let modal = document.querySelector('.modal-wrapper');
    let cancelButton = document.getElementById("cancelModal");

    cancelButton.addEventListener("click", close);

    
    function open(){
        modal.classList.add("active");
    }
    function close(){
        modal.classList.remove("active");
    }

    return{
        open,
        close
    }
}