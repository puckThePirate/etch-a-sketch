const size = document.createElement('div');
const values = document.querySelector('.slider');
const ranges = document.querySelector('.ranges')
const button = document.querySelector('.clear');
const canvas = document.querySelector('.canvas');

size.classList.add('size');
size.textContent = `Size: ${values.value}`;
ranges.appendChild(size);

function showrange(e) {
    size.textContent = `Size: ${e.target.value}`;
    ranges.appendChild(size);
    const len = 600/e.target.value;
    let child = canvas.lastElementChild;
    while(child) {
        canvas.removeChild(child);
        child = canvas.lastElementChild;
    }
    for(let i=0; i< e.target.value;i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<e.target.value;j++){
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = len + "px";
            pixel.style.height = len + "px";
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
        row.style.height = len + "px";
    }
}

values.addEventListener('input', showrange);