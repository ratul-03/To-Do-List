// Add close buttons to existing list items
const listItems = document.querySelectorAll('li');
listItems.forEach(item => {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  item.appendChild(span);
});

// Add event listeners to close buttons
function addCloseListeners() {
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(button => {
    button.onclick = function () {
      const div = this.parentElement;
      div.style.display = 'none';
    };
  });
}
addCloseListeners();

// Toggle task completion
const list = document.querySelector('ul');
list.addEventListener(
  'click',
  function (event) {
    if (event.target.tagName === 'LI') {
      event.target.classList.toggle('checkbox');
    }
  },
  false
);

// Add new item
function newItem() {
  const inputValue = document.getElementById('input').value;
  if (inputValue === '') {
    alert('You must write something!');
    return;
  }

  const li = document.createElement('li');
  const t = document.createTextNode(inputValue);
  li.appendChild(t);

  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);

  document.getElementById('todoList').appendChild(li);
  document.getElementById('input').value = '';

  addCloseListeners();
}
