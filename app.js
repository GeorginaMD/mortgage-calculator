//SELECTORS FOR CALCULATING DURATION :
// inputs type range selectors - duration
const loanDuration = document.getElementById("loan-duration");
const interestDuration = document.getElementById("interest-duration");
const paymentDuration = document.getElementById("payment-duration");
// span selectors for user input
let displayLoanDuration = document.getElementById("current-loan-duration");
let displayInterestDuration = document.getElementById(
  "current-interest-duration"
);
let displayPaymentDuration = document.getElementById(
  "current-payment-duration"
);
// form selector:
const calcBtnDuration = document.getElementById("input-duration-form");
// displaying result selector - duration
const inputResultDuration = document.getElementById("input-result-duration");

//SELECTORS FOR CALCULATING PAYMENT QTY :
// inputs type range selectors - payment
const loanPayment = document.getElementById("loan-payment");
const interestPayment = document.getElementById("interest-payment");
const duartionPayment = document.getElementById("duration-payment");
// span selectors for user input
const displayLoanPayment = document.getElementById("current-loan-payment");
const displayInterestPayment = document.getElementById(
  "current-interest-payment"
);
const displayDurationPayment = document.getElementById(
  "current-duration-payment"
);
// form selector:
const calcBtnPayment = document.getElementById("input-payment-form");
// displaying result selector- payment
const inputResultPayment = document.getElementById("input-result-payment");

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

// LISTENERS FOR PAYMENT QTY :
// Update span values as user moves sliders:
loanPayment.addEventListener("input", () => {
  displayLoanPayment.textContent = `${loanPayment.value} E`;
});
interestPayment.addEventListener("input", () => {
  displayInterestPayment.textContent = `${interestPayment.value} %`;
});
duartionPayment.addEventListener("input", () => {
  displayDurationPayment.textContent = `${duartionPayment.value} years`;
});

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

  inputResultDuration.textContent = `  ${years} years and ${remainingMonths} months`;
});

// HANDLE THE CALCULATION ON SUBMIT - PAYMENT QTY

calcBtnPayment.addEventListener("submit", (e) => {
  e.preventDefault();
  const loanAmount = Number(loanPayment.value);
  const annualIntRate = Number(interestPayment.value);
  const loanTermYears = Number(duartionPayment.value);
  const monthlyIntRate = annualIntRate / 100 / 12;
  const totalPayments = loanTermYears * 12;

  const numerator =
    monthlyIntRate * Math.pow(1 + monthlyIntRate, totalPayments);
  const denominator = Math.pow(1 + monthlyIntRate, totalPayments) - 1;
  const monthlyPayment = loanAmount * (numerator / denominator);

  inputResultPayment.textContent = ` ${monthlyPayment.toFixed(2)} E`;
});
