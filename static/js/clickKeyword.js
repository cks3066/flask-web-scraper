const input = document.getElementById("keywordInput");
const 파이썬 = document.getElementById("파이썬");
const python = document.getElementById("python");
const 프론트엔드 = document.getElementById("프론트엔드");
const frontend = document.getElementById("frontend");
const 백엔드 = document.getElementById("백엔드");
const backend = document.getElementById("backend");

const onClickEvent = (e) => {
  input.value = e.target.innerText;
};

파이썬.addEventListener("click", onClickEvent);
python.addEventListener("click", onClickEvent);
프론트엔드.addEventListener("click", onClickEvent);
frontend.addEventListener("click", onClickEvent);
백엔드.addEventListener("click", onClickEvent);
backend.addEventListener("click", onClickEvent);
