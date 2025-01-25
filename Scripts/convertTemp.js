const result = document.getElementById("result");
const tempTextBox = document.getElementById("tempertureText");
const convertBtn = document.getElementById("convertBtn");
const toFahrenheit = document.getElementById("toFaherheit");
const toCelsius = document.getElementById("toCelsius");

convertBtn.onclick = () => {
  let resultTemp = Number(tempTextBox.value);
  console.log(toFahrenheit.chec);

  if (toFahrenheit.checked) {
    resultTemp = resultTemp * (9 / 5) + 32;
    resultTemp = resultTemp.toFixed(1) + " °F";
  } else if (toCelsius.checked) {
    resultTemp = (5 / 9) * (resultTemp - 32);
    resultTemp = resultTemp.toFixed(1) + " °C";
  } else {
    resultTemp = "Select a unit";
  }
  updateResult(resultTemp);
};

const updateResult = (resultTemp) => {
  result.textContent = resultTemp;
};
