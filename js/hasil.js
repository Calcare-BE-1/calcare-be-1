// Panggil Element
let cartSelected = document.getElementById("cart");
let calculateAll = document.getElementById("calculate-all");
let displayResult = document.getElementById("group-calorie-needed");
// Ambil data dari localStorage
let getfoodsSelected = localStorage.getItem("arrFoodsIsString");
let sumCalorie = localStorage.getItem("sum");
let arrFoodsIsString = localStorage.getItem("arrFoodsIsString");
// Ubah string ke array
arrFoodsIsString = JSON.parse(arrFoodsIsString);
getfoodsSelected = JSON.parse(getfoodsSelected);
// Ubah string ke number
sumCalorie = Number(sumCalorie);

// Looping untuk menghitung semua nutrisi dari setiap makanan yang dipilih
let calorieGained = 0,
  carbohydrateGained = 0,
  proteineGained = 0,
  fatGained = 0;
for (let index = 0; index < getfoodsSelected.length; index++) {
  calorieGained += getfoodsSelected[index].calories;
  carbohydrateGained += getfoodsSelected[index].carbohydrate;
  proteineGained += getfoodsSelected[index].protein;
  fatGained += getfoodsSelected[index].fat;
}

// Looping untuk menampilkan card makanan
getfoodsSelected.forEach((item, index) => {
  cartSelected.innerHTML += `
    <div class="keranjang-box">
        <div class="keranjang-img">
            <img src="${item.image}" alt="keranjang" height="100px"
            align="left">
        </div>
        <div class="keranjang-text">
            <h3>${item.name}</h3>
            <div class="calori" id="calori">Kal: ${item.calories} KKal</div>
            <div class="nutrisi"id="karbohidrat">Karb: ${item.carbohydrate} gr</div>
            <div class="nutrisi" id="protein">Pro: ${item.protein} gr</div>
            <div class="nutrisi" id="lemak">Lem: ${item.fat} gr</div>
        </div>
    </div>`;
});

/* ===== Hitung Kebutuhan Nutrisi dengan Rumus Dasar ===== */
// Karbohidrat
let carbohydrateNeeded = (65 / 100) * sumCalorie;
carbohydrateNeeded /= 4;
// Protein
let proteinNeeded = (15 / 100) * sumCalorie;
proteinNeeded /= 4;
// Lemak
let fatNeeded = (20 / 100) * sumCalorie;
fatNeeded /= 9;

// Mendapatkan Persentase kalori yang  terpenuhi
let percentCalorie = (calorieGained / sumCalorie) * 100;
let percentCarbohydrate = (carbohydrateGained / carbohydrateNeeded) * 100;
let percentProtein = (proteineGained / proteinNeeded) * 100;
let percentFat = (fatGained / fatNeeded) * 100;

// Tampilkan bar kebutuhan
calculateAll.addEventListener("click", (ev) => {
  ev.preventDefault();
  displayResult.innerHTML = `
    <div class ="kebutuhan-kalori" id="butuh-kalori">
        <h2 class="Hasil__subtitle">Kebutuhan Kalori</h2>
        <!-- Kalori dibutuhkan -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <span class="Hasil__name">Kalori (<b>${sumCalorie.toFixed(1)} KKal</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__Kalori" id="bar-calorie-needed">
            </div>
        </div>
        <!-- Karbohidrat dibutuhkan -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <span class="Hasil__name">Karbohidrat (<b>${carbohydrateNeeded.toFixed(1)} gram</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__kb" id="bar-karbohidrat-needed">
            </div>
        </div>
        <!-- Protein dibutuhkan -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <span class="Hasil__name">Protein (<b>${proteinNeeded.toFixed(1)} gram</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__protein" id="bar-protein-needed">
            </div>
        </div>
        <!-- Lemak dibutuhkan -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <span class="Hasil__name">Lemak (<b>${fatNeeded.toFixed(1)} gram</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__lemak" id="bar-lemak-needed">
            </div>
        </div>
    </div>
    <div class="Hasil__container bd-grid">          
        <h2 class="Hasil__subtitle">Kalori Terpenuhi</h2>
        <!-- Kalori terpenuhi -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <span class="Hasil__name">Kalori (<b>${calorieGained.toFixed(1)} KKal</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__Kalori" id="bar-kalori-fulfilled" >
            </div>
            <div>
                <span class="Hasil__percentage">${percentCalorie.toFixed()}%</span>
            </div>
        </div>
        <!-- Karbohidrat terpenuhi -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <span class="Hasil__name">Karbohidrat (<b>${carbohydrateGained.toFixed(1)} gram</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__kb" id="bar-karbohidrat-fulfilled">
                
            </div>
            <div>
                <span class="Hasil__percentage">${percentCarbohydrate.toFixed()}%</span>
            </div>
        </div>
        <!-- Protein terpenuhi -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <span class="Hasil__name">Protein (<b>${proteineGained.toFixed(1)} gram</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__protein" id="bar-protein-fulfilled">
                
            </div>
            <div>
                <span class="Hasil__percentage">${percentProtein.toFixed()}%</span>
            </div>
        </div>
        <!-- Lemak terpenuhi -->
        <div class="Hasil__data">
            <div class="Hasil__names">
                <!-- <i class='bx bxs-bookmark Hasil__icon'></i> -->
                <span class="Hasil__name">Lemak (<b>${fatGained.toFixed(1)} gram</b>)</span>
            </div>
            <div class="Hasil__bar Hasil__lemak" id="bar-lemak-fulfilled">
            </div>
            <div>
                <span class="Hasil__percentage">${percentFat.toFixed()}%</span>
            </div>
        </div>
        </div>
    </div>
    `;
  let barCalorie = document.getElementById("bar-kalori-fulfilled");
  let barCarbohydrate = document.getElementById("bar-karbohidrat-fulfilled");
  let barProtein = document.getElementById("bar-protein-fulfilled");
  let barFat = document.getElementById("bar-lemak-fulfilled");
  barCalorie.style.width = `${percentCalorie}%`;
  barCarbohydrate.style.width = `${percentCarbohydrate}%`;
  barProtein.style.width = `${percentProtein}%`;
  barFat.style.width = `${percentFat}%`;
});
