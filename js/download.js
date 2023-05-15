let download = document.querySelector(".download");

download.addEventListener("click", ()=>{
    download.classList.add("active");

    setTimeout(() => {
        download.classList.remove("active")
        document.querySelector("i").classList.replace("bx-cloud-download", "bx-check-circle")
        document.querySelector(".button-text").innerText = "Try again";
        

    },5000); // 1s = 1000ms
})