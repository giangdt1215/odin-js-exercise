const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.innerText = 'Hey I’m red!';

container.appendChild(paragraph);

const heading3 = document.createElement('h3');
heading3.style.color = 'blue';
heading3.innerText = 'I’m a blue h3!';

container.appendChild(heading3);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.background = 'pink';

const h1 = document.createElement('h1');
h1.innerText = 'I’m in a div';
div.appendChild(h1);

const p = document.createElement('p');
p.innerText = 'ME TOO!';
div.appendChild(p);

container.appendChild(div);
