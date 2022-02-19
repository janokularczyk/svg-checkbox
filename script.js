let checkbox = document.getElementById('cb');
let svg = document.getElementById('checkbox');

svg.addEventListener('click', () => {
    if(checkbox.checked)
        svg.classList.add('reverse');
    else 
        svg.classList.remove('reverse');
});
