const container = document.querySelector('#container');

let div;
for(let i=0; i < 256; i++) {
    div = document.createElement('div');
    container.appendChild(div); //creates and appends div to #container div
    div.setAttribute('class', 'grid') //adds class 'grid' to each div
    div.addEventListener('mouseenter', () => {
        event.target.style.backgroundColor = 'black'
    } //colors the square div black  when hovered
    )   
};

function reset() {
    div.style.backgroundColor = 'white';
}


