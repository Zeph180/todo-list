import _, { forEach } from 'lodash';
import './style.css';

const cont = document.getElementById('container');
const list = document.getElementById('list');

const toDos = [
  {
    description: 'Wash car',
    completed: false,
  },

  {
    description: 'Play fifa',
    completed: false,
  },

  {
    description: 'Cook',
    completed: false,
  },
];

list.innerHTML = `
  <article>
    <h2>Today's todo </h2>
    <iconify-icon icon="bx:refresh"></iconify-icon>
  </article>
  <hr>
  <form>
    <input type="text" id="new-todo" class="no-outline" placeholder="Add to your list">
    <button type="submit" id="add-todo" value><iconify-icon icon="uil:enter"></iconify-icon></button>
  </form>
  <hr>
`;

toDos.forEach((toDo) => {
  const listItem = document.createElement('li');
  listItem.classList.add('task');
  listItem.innerHTML = ` 
    <input type="checkbox">
    <label>${toDo.description}</label>
    <iconify-icon icon="ph:dots-three-outline-vertical-fill" class="dots"></iconify-icon>
    <hr>  
  `;

  list.append(listItem);
});