function displayMessage() {
    window.alert('Hello')
}

function addParagraph() {
    const newElement = document.createElement('p');
    newElement.textContent = 'New Paragraph';
    document.querySelector('.container').appendChild(newElement);
}

function removeParagraph() {
    const list = document.querySelector('.container');
    list.children[list.children.length - 1].remove();
}

const btn1 = document.querySelector('#btn-1');
btn1.onclick = addParagraph;

const btn2 = document.querySelector('#btn-2');
btn2.onclick = removeParagraph;