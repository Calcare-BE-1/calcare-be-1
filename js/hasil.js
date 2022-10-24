// Panggil ID untuk wadah
let cartSelected = document.getElementById("cart");
// Ambil data dari localStorage
let getfoodsSelected = localStorage.getItem("arrFoodsIsString");
// Ubah string ke array
getfoodsSelected = JSON.parse(getfoodsSelected);
// Looping untuk ditampilkan
getfoodsSelected.forEach((item, index) => {
  console.log(item.image);
  cartSelected.innerHTML += `
    <div class="keranjang-box">
        <div class="keranjang-img">
            <img src="${item.image}" alt="keranjang" height="100px"
            align="left">
        </div>
        <div class="keranjang-text">
            <h3>${item.name}</h3>
            <div class="calori">Kalori: ${item.calories} Kcal</div>
            <div class="carbohydrat">Karb: ${item.carbohydrate}</div>
            <div class="protein">Pro: ${item.protein} gr</div>
            <div class="fat">Lem: ${item.fat} gr</div>
        </div>
    </div>`;
});

// Hitung Nutrisi
// 1. Tampilkan Kebutuhan kalori
// 2. Tampilkan kalori terpenuhi
