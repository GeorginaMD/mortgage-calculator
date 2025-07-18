//SELECTORS FOR CALCULATING DURATION :
// inputs type range
const loanDuration = document.getElementById("loan-duration");
const interestDuration = document.getElementById("interest-dutarion");
const paymentDuration = document.getElementById("payment-duration");
// span - user input
const displayLoanDuration = document.getElementById("current-loan-duration");
const displayInterestDuration = document.getElementById(
  "current-interest-dutarion"
);
const displayPaymentDuration = document.getElementById(
  "current-payment-duration"
);
// input type text - result
const inputResultDuration = document.getElementById("input-result-duration");
// form - button
const calcBtnDuration = document.getElementById("input-duration-form");

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
// input type text - result
const inputResultPayment = document.getElementById("input-result-payment");
// form - button
const calcBtnPayment = document.getElementById("input-payment-form");

// LISTENERS FOR DURATION :
// Update span values as user moves sliders:
loanDuration.addEventListener("input", () => {
  displayLoanDuration.textContent = `${loanDuration.value} E`;
});
interestDuration.addEventListener("input", () => {
  displayInterestDuration.textContent = `${interestDuration.value} %`;
});
paymentDuration.addEventListener("input", () => {
  displayPaymentDuration.textContent = `${paymentDuration.value} E`;
});
// form - button
calcBtnDuration.addEventListener("submit", () => {});

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
