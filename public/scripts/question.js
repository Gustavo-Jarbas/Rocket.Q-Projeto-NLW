export default function Question(){
    
    function read(e){
       e.parentNode.parentNode.classList.add("read");
    }

    return {read};
}