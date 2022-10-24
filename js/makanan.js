let listCards = document.getElementById("list-card");
// Untuk menampung makanan yang dipilih
let arrFoods = [];
let foods = [];
console.log(typeof foods);
// Memanggil Foods API
let cardFood = async () => {
  let URL = "https://634ff24678563c1d82b45254.mockapi.io/makanan";
  let response = await fetch(URL);
  foods = await response.json();
  // console.log(foods);
  // looping card makanan
  foods.forEach((item, index) => {
    listCards.innerHTML += `
      </br>
        <div class="box card">
            <div class="image">
                <img src="${item.image}" alt="">
                <div class="icons">
                    <a href="#" class="cart-btn" id="choose-foods" onclick="selectFoods(${index})">Pilih</a>
                </div>
            </div>
            <div class="content">
                <h3>${item.name}</h3>
                <div class="calori">${item.calories} KKal</div>
            </div>
        </div>`;
  });
};
cardFood();
let terpilih = document.getElementById("foodsTerpilih");
// Memilih makanan dan masuk ke localStorage
function selectFoods(index) {
  // Push pilihan ke array
  arrFoods.push(foods[index]);
  // Ubah array ke string
  let arrFoodsIsString = JSON.stringify(arrFoods);
  // Simpan string ke localStorage
  localStorage.setItem("arrFoodsIsString", arrFoodsIsString);

  // Menampilkan makanan yang dipilih di paragraf
  let getNameFoods = localStorage.getItem("arrFoodsIsString");
  // Ubah string ke array
  let arrNameFoods = JSON.parse(getNameFoods);
  // Untuk menampung nama makanan
  let callName = [];
  // Untuk push nama makanan
  for (let index = 0; index < arrNameFoods.length; index++) {
    callName.push(arrNameFoods[index].name);
  }
  // Menambah koma
  callName.join(",");
  // Mengubah ke string
  let callNames = callName.toString();
  // Mengubah ke lowercase
  callNames.toLowerCase();
  // Menampilkan makanan terpilih
  terpilih.innerHTML = `Makanan yang kamu pilih adalah <b>${callNames.toLowerCase()}</b>.`;
}

// Menampilkan total kebutuhan kalori dari localStorage
let nameSaved = localStorage.getItem("nameInput");
let sum = Number(localStorage.getItem("sum"));
let p = document.getElementById("deskripsiHead");
p.innerHTML = `Hai <b>${nameSaved}</b>. Jumlah kebutuhan kalorimu adalah <b>${sum.toFixed(1)} Kkal</b>. Pilihlah makanan yang kamu makan hari ini dan tracking kalorimu.`;
