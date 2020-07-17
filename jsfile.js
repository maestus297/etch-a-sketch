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
    for (i=1; i<=256; i++) {
        const x = document.getElementsByTagName('div')[i];
        x.style.backgroundColor = 'white';
    }
}


for(i=0, i<2, i++) {
    btn = 
}


let btn; // = document.getElementsByTagName('button')[0];
btn.classList.add('body');

const body = document.getElementsByTagName('div')[0];
body.classList.add('body')

