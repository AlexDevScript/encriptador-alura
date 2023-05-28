import { AddAlert, RemoveAlert } from "./toggleAlert.js";

const $btnSubmit = document.querySelector(".btn-submit");
const $btnDesencriptar = document.querySelector(".btn-desencriptar");

export const ErrorForm = (
  errorText = "Solo letras minúsculas y sin acentos.",
  option = true
) => {
  AddAlert(errorText);

  if (!option) {
    $btnSubmit.disabled = true;
    $btnDesencriptar.disabled = true;
    removeMessageError();
  }
};

function removeMessageError() {
  let timer;

  timer = setTimeout(() => {
    RemoveAlert();

    $btnSubmit.disabled = false;
    $btnDesencriptar.disabled = false;

    (() => {
      clearTimeout(timer);
    })();
  }, 3000);
}
