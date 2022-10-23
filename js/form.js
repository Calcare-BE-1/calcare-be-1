// Call input by ID
let nameInput = document.getElementById("name-input");
let jk = document.getElementById("jk-input");
let age = document.getElementById("age-input");
let height = document.getElementById("height-input");
let weight = document.getElementById("weight-input");
let submitClick = document.getElementById("form");
submitClick.addEventListener("click", (e) => {
  // save Input to localStorage
  localStorage.setItem("nameInput", nameInput.value);
  localStorage.setItem("jenisKelamin", jk.value);
  localStorage.setItem("age", age.value);
  localStorage.setItem("height", height.value);
  localStorage.setItem("weight", weight.value);

  if (nameInput !== "" || nameInput !== null) {
    sumInput();
  } else {
    e.preventDefault();
    console.log("Ini dipilih");
  }
});

function sumInput() {
  let ageReal = Number(localStorage.getItem("age"));
  let heightReal = Number(localStorage.getItem("height"));
    let weightReal = Number(localStorage.getItem("weight"));
    let jkReal = localStorage.getItem("jenisKelamin");
  let sum = 0;
  // Condition
    if (jkReal === "laki-laki" || jkReal === "LAKI-LAKI") {
      console.log(jkReal);
    sum = 88.4 + 13.4 * weightReal + 4.8 * heightReal - 5.68 * ageReal;
  } else if (jkReal === "perempuan" || jkReal === "PEREMPUAN") {
    sum = 447.6 + 9.25 * weightReal + 3.1 * heightReal - 4.33 * ageReal;
  }
  localStorage.setItem("sum", sum);
}

// laki-laki: (88.4 + 13.4 * weight) + (4.8 * height) - (5.68 * age)
// wanita: (447.6 + 9.25 * weight) + (3.10 * heigth) - (4.33 * age)
