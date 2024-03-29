export const maskPhone = (value: string) => {
  let currentValue = value.replace(/\D+/g, "");
  const length = currentValue.length;

  if (length > 10) {
    currentValue = currentValue
      .slice(0, 15)
      .replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (length === 6 && value.length === 9) {
    currentValue = currentValue
      .replace(/\D+/g, "")
      .replace(/^(\d\d)(\d{4}).*/, "($1) $2");
  } else if (length === 6) {
    currentValue = currentValue
      .replace(/\D+/g, "")
      .replace(/^(\d\d)(\d{4}).*/, "($1) $2-");
  } else if (length > 5) {
    currentValue = currentValue.replace(
      /^(\d\d)(\d{4})(\d{0,4}).*/,
      "($1) $2-$3"
    );
  } else if (length > 2) {
    currentValue = currentValue.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else if (length > 0) {
    currentValue = currentValue.replace(/^(\d*)/, "($1");
  } else if (length === 0 && value.length === 1 && value === "(") {
    currentValue = "";
  }

  return currentValue;
};

export const especialCharMask = (especialChar: string) => {
  especialChar = especialChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  especialChar = especialChar.replace(/[^a-zA-Z0-9 -]/g, "");
  especialChar = especialChar.replace(/\s+/g, "-");
  return especialChar;
};
