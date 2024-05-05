let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let spanweight = document.querySelector(".spanweight");
let spanheight = document.querySelector(".spanheight");
let bmivalue = document.querySelector(".bmivalue");
let bmicategory = document.querySelector(".bmicategory");
let weightvalue;
let heightvalue;
let bmi;
weight.addEventListener("input", () => {
  weightvalue = weight.value;
  spanweight.textContent = weightvalue + " kg";
  bmicalulator();
});
height.addEventListener("input", () => {
  heightvalue = height.value;
  spanheight.textContent = heightvalue + " cm";
  bmicalulator();
});
function bmicalulator() {
  if (weightvalue && heightvalue) {
    bmi = weightvalue / ((heightvalue / 100) * (heightvalue / 100));
    bmivalue.textContent = bmi.toFixed(2);
    if (bmi < 18.5) {
      bmicategory.textContent = "Underweight";
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      bmicategory.textContent = "Normal Weight";
    }
    if (bmi >= 25 && bmi <= 29.9) {
      bmicategory.textContent = "Overweight";
    }
    if (bmi >= 30 && bmi <= 34.9) {
      bmicategory.textContent = "Obesity (Class 1)";
    }
    if (bmi >= 35 && bmi <= 39.9) {
      bmicategory.textContent = "Obesity (Class 2)";
    }
    if (bmi >= 40) {
      bmicategory.textContent = "Morbid Obesity (Class 3)";
    }
  }
}
