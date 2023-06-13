// Btn Steps for pages
const btnAllSteps = document.querySelectorAll('.step1, .step2, .step3, .step4');
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

// Step form 2 : Btn : Arcade / Advanced / Pro

const btnPlan = document.querySelectorAll('.arcade, .advanced, .pro');
const btnArcade = document.querySelector('.arcade');
const btnAdvanced = document.querySelector('.advanced');
const btnPro = document.querySelector('.pro');

// Step form 2 : Monthly & Yearly
const planSelection = document.querySelector('.plan-selection');
const pMonthly = document.querySelector('.plan-selection p:nth-child(1)');
const pYearly = document.querySelector('.plan-selection p:nth-child(4)');
const checkboxPlanSelection = planSelection.querySelector('input[type="checkbox"]');

// Step form 2 : Monthly & Yearly : Prices to change
const priceArcade = document.querySelector('.arcade-properties p:nth-child(2)');
const priceAdvanced = document.querySelector('.advanced-properties p:nth-child(2)');
const pricePro = document.querySelector('.pro-properties p:nth-child(2)');

// Step form 2 : Advertiser

const pAdvertisement = document.querySelectorAll('.advertisement');

// Step form 3 : Btn : Online service / Larger storage / Customizable profile
const btnAddOns = document.querySelectorAll('.online-service, .larger-storage, .customizable-profile');

const btnOnlineService = document.querySelector('.online-service');
const btnLargerStorage = document.querySelector('.larger-storage');
const btnCustomizableProfile = document.querySelector('.customizable-profile');

// Step form 3 : Input checkbox
const checkboxOnlineService = btnOnlineService.querySelector('input[type="checkbox"]');
const checkboxLargerStorage = btnLargerStorage.querySelector('input[type="checkbox"]');
const checkboxCustomizableProfile = btnCustomizableProfile.querySelector('input[type="checkbox"]');


// Event to show the next form, if the btn "next-step" is clicked



// Make btn steps for pages to display the selected page
btn1.addEventListener('click', () => {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    btn1.style.backgroundColor = "#adbeff"
    btn2.style.backgroundColor = "transparent"
    btn3.style.backgroundColor = "transparent"
    btn4.style.backgroundColor = "transparent"
    btnPrevious.style.visibility = "hidden";
    btnNext.textContent = "Next Step";
    btnNext.style.backgroundColor = "#02295a"
});

btn2.addEventListener('click', () => {
    form2.style.display = "block";
    form1.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";

    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "#adbeff";
    btn3.style.backgroundColor = "transparent";
    btn4.style.backgroundColor = "transparent";
    btnPrevious.style.visibility = "visible";

    btnNext.textContent = "Next Step";
    btnNext.style.backgroundColor = "#02295a"
});

btn3.addEventListener('click', () => {
    form3.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form4.style.display = "none";

    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "#adbeff";
    btn4.style.backgroundColor = "transparent";

    btnPrevious.style.visibility = "visible";
    btnNext.textContent = "Next Step";
    btnNext.style.backgroundColor = "#02295a"
});

btn4.addEventListener('click', () => {
    form4.style.display = "block";
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";

    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "transparent";
    btn4.style.backgroundColor = "#adbeff";

    btnPrevious.style.visibility = "visible";
    btnNext.textContent = "Confirm";
    btnNext.style.backgroundColor = "#473dff"
});

// Event for btn steps pages 
btnAllSteps.forEach(btn => {
    btn.addEventListener('click', () => {
        Event.preventDefault();
        btnAllSteps.style.backgroundColor = "#adbeff";
    });
});

// Form Step 2 : Selection of plan
btnPlan.forEach(btn => {
    btn.addEventListener('click', () => {
        event.preventDefault();
    });
});

// Form Step 3 : Selection of plan
btnAddOns.forEach(btn => {
    btn.addEventListener('click', () => {
        event.preventDefault();
    });
});


planSelection.addEventListener('click', () => {
    checkboxPlanSelection.checked = !checkboxPlanSelection.checked;
    if(checkboxPlanSelection.checked){
        priceArcade.textContent = "$90/yr";
        priceAdvanced.textContent = "$120/yr";
        pricePro.textContent = "$150/yr";
        
        pMonthly.style.fontSize = "1em";
        pMonthly.style.fontWeight = "300";
        pMonthly.style.color = "#9699ab";

        setTimeout(() => {
            pYearly.style.fontSize = "1.4em";
            pYearly.style.fontWeight = "700";
            pYearly.style.color = "#02295a";
        }, 100);

    } else {
        priceArcade.textContent = "$9/mo";
        priceAdvanced.textContent = "$12/mo";
        pricePro.textContent = "$15/mo";
        pAdvertisement.display = "block";

        pYearly.style.fontSize = "1em";
        pYearly.style.fontWeight = "300";
        pYearly.style.color = "#9699ab";

        setTimeout(() => {
            pMonthly.style.fontSize = "1.4em";
            pMonthly.style.fontWeight = "700";
            pMonthly.style.color = "#02295a";
        }, 100);
    };
});



// Form step 3 : If a btn is selected, it checked the input "checkbox"
btnOnlineService.addEventListener('click', () => {
    checkboxOnlineService.checked = !checkboxOnlineService.checked;
});

btnLargerStorage.addEventListener('click', () => {
    checkboxLargerStorage.checked = !checkboxLargerStorage.checked;
});

btnCustomizableProfile.addEventListener('click', () => {
    checkboxCustomizableProfile.checked = !checkboxCustomizableProfile.checked;
});

