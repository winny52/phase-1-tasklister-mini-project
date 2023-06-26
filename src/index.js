document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input = document.querySelector("#create-task-form");
  input.addEventListener("submit", function(e){
    e.preventDefault();
    addTodo(e.target.new_task_description.value);
    e.target.reset();
  })
});

function addTodo(todo){
  const ul = document.querySelector("#tasks");
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn .addEventListener("click", HandleDelete);

  btn.textContent = "X";
  li.textContent = `${todo} `;
  li.appendChild(btn);
  ul.appendChild(li);
}

function HandleDelete(e){
  e.target.parentNode.remove();
}
