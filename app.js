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
// reset button selector
const resetButtonDuration = document.getElementById("resetDuration");

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
// reset button selector
const resetButtonPayment = document.getElementById("resetPayment");

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

// RESETING DEFAULT VALUES - DURATION
const defaultDurationValues = {
  loanDuration: 30000,
  interestDuration: 1,
  paymentDuration: 100,
};
// set sliders to default:
resetButtonDuration.addEventListener("click", () => {
  // set sliders to default:
  document.getElementById("loan-duration").value =
    defaultDurationValues.loanDuration;
  document.getElementById("interest-duration").value =
    defaultDurationValues.interestDuration;
  document.getElementById("payment-duration").value =
    defaultDurationValues.paymentDuration;
  // set display spans to default:
  document.getElementById("current-loan-duration").textContent = "";
  document.getElementById("current-interest-duration").textContent = "";
  document.getElementById("current-payment-duration").textContent = "";
  // clear the result span:
  document.getElementById("input-result-duration").textContent = "..duration..";
});

// RESETING DEFAULT VALUES - PAYMENT
const defaultPaymentValues = {
  loanPayment: 30000,
  interestPayment: 1,
  duartionPayment: 5,
};
resetButtonPayment.addEventListener("click", () => {
  // set sliders to default:
  document.getElementById("loan-payment").value =
    defaultPaymentValues.loanPayment;
  document.getElementById("interest-payment").value =
    defaultPaymentValues.interestPayment;
  document.getElementById("duration-payment").value =
    defaultPaymentValues.duartionPayment;
  // set display spans to default:
  document.getElementById("current-loan-payment").textContent = "";
  document.getElementById("current-interest-payment").textContent = "";
  document.getElementById("current-duration-payment").textContent = "";
  // clear the result span:
  document.getElementById("input-result-payment").textContent = "..quantity..";
});

// SETTING CHART TABLE
const chart = document.getElementById("myChart");

new Chart(chart, {
  type: "bar",
  data: {
    labels: ["2023", "2022", "2021", "2020", "2019"],
    datasets: [
      {
        label: "Interest rates per year:",
        data: [3.75, 2, 2.5, 2.53, 2.47],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
