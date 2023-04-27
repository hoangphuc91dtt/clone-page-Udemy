const inputLogins = document.querySelectorAll('.login input');
const inputSignUps = document.querySelectorAll('.sign-up input');
const labelLogins = document.querySelectorAll('.login label');
const labelSignUps = document.querySelectorAll('.sign-up label');

function checkFocusInput(inputs, labels) {
  inputs.forEach((input, index) => {
    input.onblur = () => {
      if (input.value.trim()) labels[index].classList.add('focus');
    };
  });
}

checkFocusInput(inputLogins, labelLogins);
checkFocusInput(inputSignUps, labelSignUps);
