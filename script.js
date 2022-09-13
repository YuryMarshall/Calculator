let a = ""; //первая цифра
let b = ""; //вторая цифра
let sign = ""; //знак
let finish = false;
let screen = document.querySelector(".calculator__screen");
let buttons = document.querySelector(".calculator__buttons__container");
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

buttons.onclick = (event) => {
  //не кнопка
  if (!event.target.classList.contains("calculator__btn")) return;
  // кнопка AC
  if (event.target.classList.contains("ac")) {
    function clearAll() {
      a = "";
      b = "";
      sign = "";
      finish = false;
      screen.textContent = 0;
      console.log(a, b, sign);
    }

    document.querySelector(".ac").onclick = clearAll;
    return;
  }
  screen.textContent = "";
  const key = event.target.textContent;
  for (let i = 0; i < digit.length; i++) {
    if (b === "" && sign === "") {
      if (key === digit[i]) {
        a += digit[i];
        console.log(a);
        screen.textContent = a;
      }
    } else if (a !== "" && b !== "" && finish) {
      if (key === digit[i]) {
        b = key;
        finish = false;
        screen.textContent = b;
      }
    } else {
      if (key === digit[i]) {
        b += digit[i];
        screen.textContent = b;
        console.log(a, b, sign);
      }
    }
  }
  for (let j = 0; j < action.length; j++) {
    if (key === action[j]) {
      sign = key;
      screen.textContent = sign;
      console.log(sign);
      return;
    }
  }

  if (key === "=") {
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = +a - +b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          screen.textContent = "Err";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
      case "%":
        a = (a * b) / 100;
        break;
    }
    finish = true;
    screen.textContent = a;
  } else if (key === "%") {
    sign = key;
    screen.textContent = key;
    return;
  } else if (key === "+/-") {
    a *= -1;
    screen.textContent = a;
  }
};
