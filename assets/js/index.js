import { ModalMessageCopy } from "./helpers/modalMessageCopy.js";
import { CopyText } from "./helpers/copy.js";
import { Encrypter, Decrypt } from "./helpers/encrypter.js";
import { ErrorForm } from "./helpers/error.js";
import { RemoveAlert } from "./helpers/toggleAlert.js";

const $main = document.querySelector("main");
const $text = document.querySelector(".form__textarea");
const $textOutput = document.querySelector(".message__encode__output");
const $textTitle = document.querySelector(".message__encode__title");
const $infoText = document.querySelector(".container__info__encode");
const $messageDes = document.querySelector(".container__message__encode");

const regex = /[áéúóí0-9*!¡¿?@#$%&/"'´+-_°|]/;
let error = false;

const encodeText = (textTitle, fn, repeat = false) => {
  if (!repeat) {
    $textOutput.value = fn;
    $textTitle.textContent = `${textTitle}`;
    clear("encode");
  }

  $textOutput.value = fn;
  $textTitle.textContent = `${textTitle}`;
  clear("textArea");
};

document.addEventListener("click", (e) => {
  let text = $text.value;
  let textOuput = $textOutput.value;

  text = text.split("\n").join("");

  if (e.target.matches(".btn-submit")) {
    e.preventDefault();

    if (text !== "" && textOuput !== "") {
      encodeText("Texto Encriptado", Encrypter(text), true);
      return;
    }

    if (error) return;

    text === ""
      ? ErrorForm("Ingresa un texto", false)
      : encodeText("Texto Encriptado", Encrypter(text));
  }

  if (e.target.matches(".btn-desencriptar")) {
    e.preventDefault();

    if (text !== "" && textOuput !== "") {
      encodeText("Texto Desencriptado", Decrypt(text), true);
      return;
    }

    if (error) return;

    text === ""
      ? ErrorForm("Ingresa un texto", false)
      : encodeText("Texto Desencriptado", Decrypt(text));
  }

  if (e.target.matches(".btn-copy")) {
    CopyText($textOutput.value);
    clear("copy");
    ModalMessageCopy($main);
  }

  if (e.target.matches(".btn-clear")) {
    clear("cleanBothTextArea");
  }
});

$text.addEventListener("keyup", (e) => {
  const currentValue = e.target.value;
  const lowercaseValue = currentValue.toLowerCase();

  error = regex.test((e.target.value = lowercaseValue));

  !error ? RemoveAlert() : ErrorForm();
});

$text.addEventListener("input", (e) => {
  let pasteTextArea = e.target.value;
  $text.value = pasteTextArea.toLowerCase();

  error = regex.test(e.target.value);
  !error ? RemoveAlert() : ErrorForm();
});

function clear(option) {
  if (option === "textArea") {
    clearTextArea();
  }

  if (option === "cleanBothTextArea") {
    $text.value !== "" && clearTextArea();
    $textOutput.value !== "" && clearOutput();
    RemoveAlert();
    $text.focus();
  }

  option === "encode" && clearTextAreaToggle();

  option === "copy" && clearOutput();

  function clearTextArea() {
    $text.value = "";
    $text.focus();
  }

  function clearTextAreaToggle() {
    $text.value = "";
    $infoText.classList.toggle("hide");
    $messageDes.classList.toggle("show");
    $text.focus();
  }

  function clearOutput() {
    $textOutput.value = "";
    $text.value = "";
    $infoText.classList.toggle("hide");
    $messageDes.classList.toggle("show");
    $text.focus();
  }
}
