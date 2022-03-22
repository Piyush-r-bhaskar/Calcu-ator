const result = document.getElementById("inputtext");

const calculate = (num) => {
  result.value += num;
};

const Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Enter Valid Number/Operator");
  }
};

const clr = () => {
  result.value = "";
};

const backspace = () => {
  result.value = result.value.slice(0, -1);
};
