const todoList = [{
  name: "make dinner", 
  dueDate:'2022-12-23' }, {
  name: "wash dishies", 
dueDate: '2022-12-23'}
];

renderTodoList();
function renderTodoList() {
  let todoListHtml = "";
  // Generate HTML for user automatically,
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    
    const html = `
    <p>${name} ${dueDate}
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      "> Delete </button> 
    </p>
    `;
    todoListHtml += html;
  }
 

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}
// Main Idea of JavaScript. Creating websites with JavaScript we follow three step process, 1. save the data, 2. Generate the HTML, 3. Make website interactive.

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateElement = document.querySelector(
    '.js-due-date-input');
    const dueDate  = dateElement.value;

  todoList.push({
   // name: name,
   // dueDate: dueDate,
    name,
    dueDate
  });
  

  inputElement.value = "";

  renderTodoList();
}
