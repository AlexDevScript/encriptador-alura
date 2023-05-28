export const ModalMessageCopy = ($main) => {
  const $containerModal = document.createElement("div");
  const $containerMessage = document.createElement("div");
  const $img = document.createElement("img");
  const $messageCopy = document.createElement("p");

  $containerModal.classList.add("modal");
  $containerMessage.classList.add("container__modal__message");

  $img.setAttribute("src", "./assets/img/logo_oracleAlura.svg");
  $img.setAttribute("alt", "logo oracle-alura");
  $messageCopy.textContent = "Texto copiado al portapapeles.😀";

  $containerMessage.appendChild($img);
  $containerMessage.appendChild($messageCopy);
  $containerModal.appendChild($containerMessage);
  $main.appendChild($containerModal);

  removeMessage();

  function removeMessage() {
    let $temp = document.querySelector(".modal");

    let timer = setTimeout(() => {
      $main.removeChild($temp);

      (() => {
        clearTimeout(timer);
      })();
    }, 3000);
  }
};
