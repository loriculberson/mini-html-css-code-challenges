const tempConverter = () => {
  const incomingFahrenheitTemp = document.querySelector('.temp-input').value;
  let fahrenheit = Number(incomingFahrenheitTemp);
  //code goes here
}

const submitButton = document.querySelector('.submit-temp');
submitButton.addEventListener('click', tempConverter)


