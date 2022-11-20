const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm Red";
paragraph.style.color = 'red';

container.appendChild(paragraph);

// an <h3> with blue text that says “I’m a blue h3!”
const header3 = document.createElement('h3');
header3.textContent = "I'm a blue h3!"
header3.style.color = 'blue';

container.appendChild(header3);

// a <div> with a black border and pink background color 
//with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”
//     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const block = document.createElement('div');
block.classList.add('block');
block.style.cssText ='border-color: black;border-style: solid;background-color:pink;border-width:2px;';
container.appendChild(block);

const header1 = document.createElement('h1');
header1.textContent = "I'm in a div";
block.appendChild(header1);

const p2 = document.createElement('p2');
p2.textContent = "ME TOO!";
block.appendChild(p2);