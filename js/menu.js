 let myIcon = document.getElementById('icon');



myIcon.addEventListener('click', myToggle);

function myToggle() {

    let myList = document.querySelector('ul');
   //console.log(myList)
    myList.classList.toggle("show");
}

