const bdy = document.querySelector('body');
//document.body.appendChild(bdy)
bdy.setAttribute('class', 'grid');

let div
for(let i=0; i < 16; i++) {
    div = document.createElement('div');
    bdy.appendChild(div);
}