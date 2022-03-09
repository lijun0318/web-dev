let paragraphElement = document.querySelector("p");

function changeParagrapyText(event) {
  paragraphElement.textContent = "Clicked!";
  console.log("Paragraph clicker!");
  console.log(event);
}

paragraphElement.addEventListener("click", changeParagrapyText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  // let enteredText = inputElement.value;
  let enteredText = event.target.value;
  //let enteredText = event.data;  => 这是一个不一样的访问输入值的方式
  console.log(enteredText);
  console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
