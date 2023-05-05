const body = document.getElementById("main-container");
const ratinElements = document.querySelectorAll(".image");
const button  = document.getElementById("btn");
let selectedEl = "";

ratinElements.forEach((ratinEl) => {
    ratinEl.addEventListener("click", (event)=>{
        removeActive();
        selectedEl= event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});
button.addEventListener("click", ()=>{
    if (selectedEl !== ""){
        body.innerHTML = ` 
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback says ${selectedEl}
        <p> Your Feedback will help us serve you better.</p>
        `
    }
})

function removeActive(){
    ratinElements.forEach((ratinEl) => {
        ratinEl.classList.remove("active")
})
}

