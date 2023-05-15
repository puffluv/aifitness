// Pop UP feedback
document.getElementById("open-modal-btn").addEventListener("click",function(){
    document.getElementById("modalfeedback").classList.add("open")
})

document.getElementById("close-modalfeedback").addEventListener("click",function(){
    document.getElementById("modalfeedback").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("modalfeedback").classList.remove("open")
    }
});

document.querySelector("#modalfeedback .feedbackmodal").addEventListener('click', event => {
    event._isClickWithInModal = true;   
});
document.getElementById("modalfeedback").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});