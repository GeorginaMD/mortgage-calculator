//SELECTORS FOR CALCULATING DURATION :
// inputs type range
const loanDuration = document.getElementById("loan-duration");
const interestDuration = document.getElementById("interest-duration");
const paymentDuration = document.getElementById("payment-duration");
// span - user input
let displayLoanDuration = document.getElementById("current-loan-duration");
let displayInterestDuration = document.getElementById(
  "current-interest-dutarion"
);
let displayPaymentDuration = document.getElementById(
  "current-payment-duration"
);
// form - button
const calcBtnDuration = document.getElementById("input-duration-form");
// input type text - result
const inputResultDuration = document.getElementById("input-result-duration");

//SELECTORS FOR CALCULATING PAYMENT QTY :
// inputs type range
const loanPayment = document.getElementById("loan-payment");
const interestPayment = document.getElementById("interest-payment");
const duartionPayment = document.getElementById("duration-payment");
// span -  user input
const displayLoanPayment = document.getElementById("current-loan-payment");
const displayInterestPayment = document.getElementById(
  "current-interest-payment"
);
const displayDurationPayment = document.getElementById(
  "current-duration-payment"
);
// form - button
const calcBtnPayment = document.getElementById("input-payment-form");
// input type text - result
const inputResultPayment = document.getElementById("input-result-payment");

// LISTENERS FOR DURATION :
// Update span values as user moves sliders:
loanDuration.addEventListener("input", () => {
  displayLoanDuration = `${loanDuration.value} E`;
});
interestDuration.addEventListener("input", () => {
  displayInterestDuration = `${interestDuration.value} %`;
});
paymentDuration.addEventListener("input", () => {
  displayPaymentDuration = `${paymentDuration.value} E`;
});

// LISTENERS FOR PAYMENT QTY :
//inputs type range
loanPayment.addEventListener("input", () => {
  displayLoanPayment.textContent = `${loanPayment.value} E`;
});
interestPayment.addEventListener("input", () => {
  displayInterestPayment.textContent = `${interestPayment.value} %`;
});
duartionPayment.addEventListener("input", () => {
  displayDurationPayment.textContent = `${duartionPayment.value} years`;
});
// form - button
calcBtnPayment.addEventListener("submit", () => {});

// HANDLE THE CALCULATION ON SUBMIT - DURATION

calcBtnDuration.addEventListener("submit", (e) => {
  e.preventDefault();
  const loan = Number(loanDuration.value);
  const monthlyPayment = Number(paymentDuration.value);
  const annualInterest = Number(interestDuration.value);
  const rate = annualInterest / 12 / 100;

  const numerator = Math.log(monthlyPayment / (monthlyPayment - loan * rate));
  const denominator = Math.log(1 + rate);
  const months = numerator / denominator;

  const totalMonths = Math.round(months);
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  inputResultDuration.value = `  ${years} years and ${remainingMonths} months`;
});

// HANDLE THE CALCULATION ON SUBMIT - PAYMENT QTY
