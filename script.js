const size = document.createElement('div');
const values = document.querySelector('.slider');
const ranges = document.querySelector('.ranges')
const button = document.querySelector('.clear');
const canvas = document.querySelector('.canvas');
const clear = document.querySelector('.clear');

const ss = values.value;

size.classList.add('size');
size.textContent = `Size: ${values.value}`;
ranges.appendChild(size);

const ini = 600/16;
for(let i=0; i< 16;i++){    // builds inital grid
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j=0;j<16;j++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = ini + "px";
        pixel.style.height = ini + "px";
        row.appendChild(pixel);
        pixel.addEventListener('mouseover', paint);
    }
    canvas.appendChild(row);
    row.style.height = ini + "px";
}

function createrange(e) {

    size.textContent = `Size: ${e.target.value}`;
    ranges.appendChild(size);
    const len = 600/e.target.value;

    let child = canvas.lastElementChild; // removes previous grid 
    while(child) {
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }

    for(let i=0; i< e.target.value;i++){    // builds new grid
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<e.target.value;j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = len + "px";
            pixel.style.height = len + "px";
            row.appendChild(pixel);
            pixel.addEventListener('mouseover', paint);
        }
        canvas.appendChild(row);
        row.style.height = len + "px";
    }
}

function paint(e) {
    e.target.classList.add('hovered');
}

function erase() {

    let child = canvas.lastElementChild; // removes previous grid 
    while(child) {
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }
    
    let newlen = 600/ss;
    for(let i=0; i< ss;i++){    // builds new grid
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<ss;j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = newlen + "px";
            pixel.style.height = newlen + "px";
            row.appendChild(pixel);
            pixel.addEventListener('mouseover', paint);
        }
        canvas.appendChild(row);
        row.style.height = newlen + "px";
    }

}

values.addEventListener('input', createrange);
clear.addEventListener('click',erase);