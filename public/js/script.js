// Btn Steps for pages
const btn1 = document.querySelector('.step1');
const btn2 = document.querySelector('.step2');
const btn3 = document.querySelector('.step3');
const btn4 = document.querySelector('.step4');


// Btn previous and next steps
const btnPrevious = document.querySelector('.previous-step');
const btnNext = document.querySelector('.next-step');


// Const for forms
const form1 = document.querySelector('.form-step-1')
const form2 = document.querySelector('.form-step-2')
const form3 = document.querySelector('.form-step-3')
const form4 = document.querySelector('.form-step-4')


// Event to show the next form, if the btn "next-step" is clicked



// Make btn steps for pages to display the selected page
btn1.addEventListener('click', () => {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    btn1.style.backgroundColor = "#adbeff";
    btnPrevious.style.visibility = "hidden";
});

btn2.addEventListener('click', () => {
    form2.style.display = "block";
    form1.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    btn2.style.backgroundColor = "#adbeff";
    btnPrevious.style.visibility = "visible";
});

btn3.addEventListener('click', () => {
    form3.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form4.style.display = "none";
    btn3.style.backgroundColor = "#adbeff";
    btnPrevious.style.visibility = "visible";
});

btn4.addEventListener('click', () => {
    form4.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    btn4.style.backgroundColor = "#adbeff";
    btnPrevious.style.visibility = "visible";
});