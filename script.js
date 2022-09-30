function square() {
  const message = document.getElementById("msg");

  message.innerHTML = "";

  let number = document.getElementById("square-num").value;

  try {
    if (isNaN(number)) throw "— It is not a number, please enter numbers only.";
    if (number == "") throw "— You should not leave it empty."

    message.innerHTML = `Result: ${Math.pow(number, 2)}`
  } catch (error) {
    message.innerHTML = error;
  }
}
