export default function cpfValid(cpfDigits) {
  const cpf = cpfDigits.split("");

  for (let i = 0; i < cpf.length; i++) {
    if (cpf[i] === "." || cpf[i] === "-") {
      cpf.splice(i, 1);
    }
  }

  let firstTenDigits = [];
  let firstPatter = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  let secondPatter = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  let sumFirstPatter = 0;
  let sumSecondPatter = 0;
  let firstCheck = false;
  let secondCheck = false;

  for (let i = 0; i <= 9; i++) {
    firstTenDigits[i] = "" + cpf[i];
  }
  /* Check First Digit */
  for (let i = 0; i <= 8; i++) {
    sumFirstPatter = sumFirstPatter + firstTenDigits[i] * firstPatter[i];
  }
  if ((sumFirstPatter * 10) % 11 == "" + cpf[9]) {
    firstCheck = true;
  }

  /* Check Second Digit */
  for (let i = 0; i <= 9; i++) {
    sumSecondPatter = sumSecondPatter + firstTenDigits[i] * secondPatter[i];
  }
  if ((sumSecondPatter * 10) % 11 == "" + cpf[10]) {
    secondCheck = true;
  }

  if (firstCheck & secondCheck) {
    return true;
  }
  return false;
}

/*  if (cpf.length === 14) {
              if (!cpfValid(cpf)) {
                setInvalid("invalid");
               /*  alert("CPF INVÁLIDO"); */
/*  setCpf("");
              }
            } else {
              setInvalid("");
            } */
