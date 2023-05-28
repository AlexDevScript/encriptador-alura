const $alertText = document.querySelector(".form__container__info");

export const AddAlert = (errorText) => {
  $alertText.children[1].textContent = `${errorText}`;
  $alertText.classList.add("alert");
};

export const RemoveAlert = () => {
  $alertText.children[1].textContent = "Solo letras minúsculas y sin acentos.";
  $alertText.classList.remove("alert");
};
