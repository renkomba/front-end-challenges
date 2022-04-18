const selectionNotice = [...document.querySelector('.selections').children][0];
const nums = document.querySelector('.nums');
const cardSides = [...document.querySelectorAll('section')];
const displays = {
    'none' : 'grid',
    'grid' : 'none'
};

document.addEventListener('click', e => {
    let target = e.target;
    if (target.parentNode.classList.contains('nums')){
        selectionNotice.innerHTML = target.innerHTML;

        for (let num of nums.children) {
            if (num.classList.contains('active') || num === target) {
                num.classList.toggle('active');
                console.log(num, num.classList)
            }
        }
    }

    if (target.innerHTML === 'SUBMIT') {
        for (let side of cardSides) {
            side.style.display = displays[
                window.getComputedStyle(side)['display']
            ];
        }
    }
})