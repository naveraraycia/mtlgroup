const imgs = document.getElementById('imgs');

const description = document.getElementById('desc');


const imgList = document.querySelectorAll('#imgs img');

const descList = document.querySelectorAll('.description-container');

const fixedBtn = document.querySelector('.action');

descList[0].classList.add('isVisible');


let idx = 0;

let interval = setInterval(run,5000);

function run () {
    descList[idx].classList.toggle('isVisible');
    idx++;
    changeImage();
}

function changeImage() {

    if (idx > imgList.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = imgList.length - 1;
    }

    descList[idx].classList.toggle('isVisible');

    if(idx== 0){
        fixedBtn.style.backgroundColor = '#D99AF6';
        fixedBtn.onmouseover = function () {
            this.style.backgroundColor = '#B35BDD';
        };
        fixedBtn.onmouseout = function () {
            this.style.backgroundColor = '#D99AF6';
        };
    } else if (idx== 1) {
        fixedBtn.style.backgroundColor = '#FA8B56';
        fixedBtn.onmouseover = function () {
            this.style.backgroundColor = '#f36828';
        };
        fixedBtn.onmouseout = function () {
            this.style.backgroundColor = '#FA8B56';
        };
    } else if (idx== 2) {
        fixedBtn.style.backgroundColor = '#E25A59';
        fixedBtn.onmouseover = function () {
            this.style.backgroundColor = '#DB1715';
        };
        fixedBtn.onmouseout = function () {
            this.style.backgroundColor = '#E25A59';
        };
    } else if (idx== 3) {
        fixedBtn.style.backgroundColor = '#4BD28C';
        fixedBtn.onmouseover = function () {
            this.style.backgroundColor = '#00AF54';
        };
        fixedBtn.onmouseout = function () {
            this.style.backgroundColor = '#4BD28C';
        };
    } else if (idx== 4) {
        fixedBtn.style.backgroundColor = '#E9B64B';
        fixedBtn.onmouseover = function () {
            this.style.backgroundColor = '#D99E20';
        };
        fixedBtn.onmouseout = function () {
            this.style.backgroundColor = '#E9B64B';
        };
    } else if (idx== 5) {
        fixedBtn.style.backgroundColor = '#387CA3';
        fixedBtn.onmouseover = function () {
            this.style.backgroundColor = '#15567C';
        };
        fixedBtn.onmouseout = function () {
            this.style.backgroundColor = '#387CA3';
        };
    }
    
    imgs.style.transform = `translateY(${-idx*100}vh)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run,5000);
}
