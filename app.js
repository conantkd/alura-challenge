const userInput = document.querySelector(".input-user");
const hiddeInfo = document.querySelector(".hidden-info");
const translationOutput = document.querySelector(".output-encription");
const btnCopy = document.querySelector(".btn-copy");
const translationSection = document.querySelector(".message");

function btnEnctriptar() {
  if (userInput.value.length > 0) {
    translationOutput.value = "";
    btnCopy.style.visibility = "visible";
    translationOutput.style.visibility = "visible";
    translationOutput.style.height = "811px"
    const textEncriptado = encription(userInput.value);
    translationOutput.value = textEncriptado;
    hiddeInfo.innerHTML = ``;
    userInput.value = "";
  }
}

function btnDesenctriptar() {
  if (userInput.value.length > 0) {
    translationOutput.value = "";
    btnCopy.style.visibility = "visible";
    translationOutput.style.visibility = "visible";
    translationOutput.style.height = "811px";
    const textDesencriptado = dencription(userInput.value);
    translationOutput.value = textDesencriptado;
    hiddeInfo.innerHTML = ``;
    userInput.value = "";
  }
}

function btnCopyF() {
  if (translationOutput.value.length > 0) {
    userInput.value = translationOutput.value;
    translationOutput.value = "";
    
  }
}

function encription(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function dencription(stringDesencriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptado = stringDesencriptado.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptado.includes(matrizCodigo[i][1])) {
      stringDesencriptado = stringDesencriptado.replaceAll(
        matrizCodigo[i][1],matrizCodigo[i][0]
        
      );
    }
  }
  return stringDesencriptado;
}