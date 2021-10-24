
var buttonEl = document.querySelector('.btnGOback')

// buttonEl.addEventListener("click", goBack);

buttonEl.onclick = goBack;
function goBack() {
    console.log("hi");
    window.open.href = "../Homework_04/index.html";
}


