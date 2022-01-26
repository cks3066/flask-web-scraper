const _input = document.getElementById("_keywordInput");
const _submitButton = document.getElementById("_submitButton");
const _body = document.getElementsByTagName("body");

const onSubmitEvent = (e) => {
  if (_input.value !== "") _body[0].style.cursor = "wait";
};

_submitButton.addEventListener("click", onSubmitEvent);
