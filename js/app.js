// 1. Select the form, the input and the list with querySelector
const form = document.querySelector("#todo-form");
const input = document.querySelector("#task");
const list = document.querySelector("#todo-list");

// 2. Listen for the submit event and call preventDefault()
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 3. Read and trim the value; ignore empty text
  const text = input.value.trim();
  if (!text) return;

  // 4. Create a li, set its textContent, add a click listener that toggles done, and append it to the list
  const li = document.createElement("li");
  li.textContent = text;
  li.addEventListener("click", () => li.classList.toggle("done"));
  list.append(li);

  // 5. Reset the form
  form.reset();
});