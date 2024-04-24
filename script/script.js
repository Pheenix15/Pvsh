
const pills = document.querySelectorAll('.pills');
const hero = document.querySelector('.hero');
const colors = ['rgba(233, 237, 211, 1)', 'rgba(213, 213, 255, 1)', 'rgba(233, 237, 211, 1)'];

let colorIndex = 0;
pills.forEach((pill) => {
    pill.addEventListener('animationstart', () => {
        pill.style.visibility = 'visible';
        // Change background color to specific colors as each pill drops
        hero.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
    });
});


function dropdown1() {
    document.querySelector(".tab1").classList.toggle("open");
}

