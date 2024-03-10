var openBtns = document.getElementsByClassName("openBtn");
var openBtnsArray = [...openBtns];

var closeBtns = document.getElementsByClassName("closeBtn");
var closeBtnsArray = [...closeBtns];

var answers = document.getElementsByClassName("text");
var answersArray = [...answers];

// Loops through open buttons and puts a click event listener on each one
// Will toggle all open buttons to hidden & answer
for (var i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener("click", e => {
        var openBtn = e.target;
        var closeBtn = closeBtns[openBtnsArray.indexOf(openBtn)];
        var answer = answers[openBtnsArray.indexOf(openBtn)];
        
        openBtn.classList.toggle("hidden");
        closeBtn.classList.toggle("hidden");
        answer.classList.toggle("hidden");
    });
}

// Same as above but for close buttons & closes answer
for (var i = 0; i < closeBtns.length; i++) {
    closeBtns[i].addEventListener("click", e => {
        var closeBtn = e.target;
        var openBtn = openBtns[closeBtnsArray.indexOf(closeBtn)];
        var answer = answers[openBtnsArray.indexOf(openBtn)];
        
        closeBtn.classList.toggle("hidden");
        openBtn.classList.toggle("hidden");
        answer.classList.toggle("hidden");
    });
}
