function onEntry(entry) {
    entry.ForEach(change =>{
        if (change.isIntersecting) {

            change.target.classList.add('element-show');
        }
    });
}

// test
let options = {
    threshold: [0.5] };
    let observer = new
IntersectionObserver(onEntry, options);
let elements = 
document.querySelectorAll('.Welcome1');

for (let elm of elements) {
    observer.observe(elm);
}