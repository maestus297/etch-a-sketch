const container = document.querySelector('#container');
container.setAttribute('class', 'grid');


let div;
for(let i=0; i < 56; i++) {
    div = document.createElement('div');
    container.appendChild(div);
};

container.style.display =  'grid';
container.style.gridGap = '50px 50px';
container.style.borderTop = '1px solid black';
container.style.borderLeft = '1px solid black';
container.style.gridTemplateColumns = '50px 50px 50px 50px 50px 50px 50px 50px 50px';