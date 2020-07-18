const container = document.querySelector('#container');

let div;
for(let i=0; i < 256; i++) {
    div = document.createElement('div');
    container.appendChild(div);                         //creates and appends div to #container div
    div.setAttribute('class', 'grid')                   //adds class 'grid' to each div
    div.addEventListener('mouseenter', () => {          //colors the square div black  when hovered
        event.target.style.backgroundColor = 'black'
    } 
    )   
};

function reset() {                                      //resets grid by changing the background color of all the divs to white
    for (i=1; i<=258; i++) {
        const x = document.getElementsByTagName('div')[i];
        x.style.backgroundColor = 'white';
    }
} 