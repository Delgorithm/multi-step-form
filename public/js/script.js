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

// Step form 3 : price
const priceOnlineService = document.querySelector('.online-service-properties-bill p:nth-child(1)');
const priceLargerStorage = document.querySelector('.larger-storage-properties-bill p:nth-child(1)');
const priceCustomizableProfile = document.querySelector('.customizable-profile-properties-bill p:nth-child(1)');

// Step form 4 : Plan's price selected from step 2 
const pPlanPrice = document.querySelector('.conclusion-properties-type-bill p:nth-child(1)');

// Step form 4 : Change the name of the selected plan
const pPlanSelected = document.querySelector('.conclusion-properties-type-display p:nth-child(1)');

// Step form 4 : Change the selected plan and go back to step form 2
const pChangePlan = document.querySelector('.conclusion-properties-type-display p:nth-child(2)');

// Step form 4 : Adding the add-ons if selected on step form 2
const pConclusionOnline = document.querySelector('.conclusion-properties-online');
const pConclusionStorage = document.querySelector('.conclusion-properties-storage');
const pConclusionCustomizable = document.querySelector('.conclusion-properties-customizable');

// Step form 4 : Add-ons prices
const priceOnlineBill = document.querySelector('.conclusion-properties-online-bill p:nth-child(1)');
const priceStorageBill = document.querySelector('.conclusion-properties-storage-bill p:nth-child(1)');
const priceCustomizableBill = document.querySelector('.conclusion-properties-customizable-bill p:nth-child(1)');

// Step form 4 : Adding the total value
const conclusionPrice = document.querySelector('.conclusion-properties-total');
const pConclusionPrice = document.querySelector('.conclusion-properties-total p:nth-child(2)');


// Event to show the next form, if the btn "next-step" is clicked

// Function to hide all steps
function hideAllForms(){
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
}

// Function to reinitialise all styles for btn steps
function resetButtonStyle(){
    btn1.style.backgroundColor = "transparent";
    btn2.style.backgroundColor = "transparent";
    btn3.style.backgroundColor = "transparent";
    btn4.style.backgroundColor = "transparent";
}

// Function to update the state of the step
function updateCurrentStep(step){
    hideAllForms();
    resetButtonStyle();
    
    // Display the current form
    step.form.style.display = "block";

    // Change the color of the current step
    step.button.style.backgroundColor = "#adbeff";

    // Display or hide the btn "Go back"
    btnPrevious.style.visibility = step.hasPrevious ? "visible" : "hidden";

    // Display or change the btn "Next step / Confirm" and background color
    btnNext.textContent = step.isLast ? "Confirm" : "Next Step";
    btnNext.style.backgroundColor = step.isLast ? "#473dff" : "#02295a";

}

// Define steps
const steps = [
    { form: form1, button: btn1, hasPrevious: false, isLast: false },
    { form: form4, button: btn4, hasPrevious: true, isLast: false },
    { form: form2, button: btn2, hasPrevious: true, isLast: false },
    { form: form3, button: btn3, hasPrevious: true, isLast: true },
];

// Event for btns to go to the step of the form
steps.forEach((step) => {
    step.button.addEventListener('click', () => {
        updateCurrentStep(step);
    });
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

// From step 2 : Month & Yearly 

// Function for the selected plan : Month & Yearly

// // Step form 4 : Add-ons prices
// const priceOnlineBill = document.querySelector('.conclusion-properties-online-bill p:nth-child(1)');
// const priceStorageBill = document.querySelector('.conclusion-properties-storage-bill p:nth-child(1)');
// const priceCustomizableBill = document.querySelector('.conclusion-properties-customizable-bill p:nth-child(1)');

const toggleCheckbox = () => {
    checkboxPlanSelection.checked = !checkboxPlanSelection.checked;

    if(checkboxPlanSelection.checked){
        priceArcade.textContent = "$90/yr";
        priceAdvanced.textContent = "$120/yr";
        pricePro.textContent = "$150/yr";

        priceOnlineBill.textContent = "+$10/yr";
        priceStorageBill.textContent = "+$20/yr";
        priceCustomizableBill.textContent = "+$20/yr"
        
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

        priceOnlineBill.textContent = "+$1/mo";
        priceStorageBill.textContent = "+$2/mo";
        priceCustomizableBill.textContent = "+$2/mo"

        pYearly.style.fontSize = "1em";
        pYearly.style.fontWeight = "300";
        pYearly.style.color = "#9699ab";

        setTimeout(() => {
            pMonthly.style.fontSize = "1.4em";
            pMonthly.style.fontWeight = "700";
            pMonthly.style.color = "#02295a";
        }, 100);
    };
};

planSelection.addEventListener('click', toggleCheckbox);

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

// If p "change" is selected, go back to form step 2 
pChangePlan.addEventListener('click', () => {
    form4.style.display = "none";
    form2.style.display = "block";
});

// If selected plan is clicked && Monthly is clicked => $x for the step 4

btnArcade.addEventListener('click', () => {
    if(checkboxPlanSelection.checked){
        pPlanPrice.innerText = "$90/yr";
        pPlanSelected.innerText = "Arcade (Yearly)"
    } else {
        pPlanPrice.innerText = "$9/mo";
        pPlanSelected.innerText = "Arcade (Monthly)"
    }
});

btnAdvanced.addEventListener('click', () => {
    if(checkboxPlanSelection.checked){
        pPlanPrice.innerText = "$120/yr";
        pPlanSelected.innerText = "Advanced (Yearly)"

    } else {
        pPlanPrice.innerText = "$12/mo";
        pPlanSelected.innerText = "Advanced (Monthly)"
    }
});

btnPro.addEventListener('click', () => {
    if(checkboxPlanSelection.checked){
        pPlanPrice.innerText = "$150/yr";
        pPlanSelected.innerText = "Pro (Yearly)"
    } else {
        pPlanPrice.innerText = "$15/mo";
        pPlanSelected.innerText = "Pro (Monthly)"
    }
});

// Form step 4 : Make the add-ons visible if clicked on step 3

btnOnlineService.addEventListener('click', () => {
    pConclusionOnline.style.display = "flex";
});

btnLargerStorage.addEventListener('click', () => {
    pConclusionStorage.style.display = "flex";
});

btnCustomizableProfile.addEventListener('click', () => {
    pConclusionCustomizable.style.display = "flex";
});