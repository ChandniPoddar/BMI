// script.js
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
document.getElementById("calculateBtn").addEventListener("click", function () {
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultElement = document.getElementById("result");
  
    if (!gender || !height || !weight) {
      resultElement.textContent = "Please fill in all the fields!";
      resultElement.style.color = "red";
      return;
    }
  
    // Calculate BMI
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  
    // Determine BMI category
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
      
    } else if (bmi < 24.9) {
      category = "Normal weight";
    

    } else if (bmi < 29.9) {
      category = "Overweight";
    
    } else {
      category = "Obesity";
  

    }
  
    // Display result
    resultElement.textContent = "Gender:" + gender.charAt(0).toUpperCase() + gender.slice(1)+ "\nYour BMI is "+ bmi + "\n"+ category;
    // resultElement.style.color = "green";

    if (bmi < 18.5) {
        resultElement.style.color = "grey";

        
      } else if (bmi < 24.9) {
        resultElement.style.color = "green";

      
  
      } else if (bmi < 29.9) {
        resultElement.style.color = "grey";

      
      } else {
        resultElement.style.color = "red";

  
      }
  });
  // animation
