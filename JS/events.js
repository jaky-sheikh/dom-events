console.log('This is separate js file');

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('make-blue');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})