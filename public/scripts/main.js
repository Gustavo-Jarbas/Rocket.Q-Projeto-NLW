import Modal from './modal.js';
import Question from './question.js';

const modal = Modal();
const question = Question();

const checkButtons = document.querySelectorAll(".actions a.delete");

checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        modal.open();
    })
});

const readButtons = document.querySelectorAll(".actions a.check");

readButtons.forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        question.read(button);
    })
});