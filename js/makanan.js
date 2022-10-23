// Call Food API
let listCards = document.getElementById("list-card");
let cardFood = async () => {
  let URL = "https://634ff24678563c1d82b45254.mockapi.io/makanan";
  let response = await fetch(URL);
  let foods = await response.json();
  console.log(foods);
  // tampilkan card makanan
  foods.forEach((item, index) => {
    listCards.innerHTML += `
      </br>
        <div class="box">
            <div class="image">
                <img src="${item.image}" alt="">
                <div class="icons">
                    <a href="#" class="cart-btn" id="choose-foods">Pilih</a>
                </div>
            </div>
            <div class="content">
                <h3>${item.name}</h3>
                <div class="calori">${item.calories} KKal</div>
            </div>
        </div>`;
  });

  let chooseBtn = document.getElementById("choose-foods");
  let terpilih = document.getElementById("foodsTerpilih");
  // if (chooseBtn.onclick == true) {
  //   (el, index) => {
  //     console.log(terpilih);
  //     el.preventDefault();
  //     localStorage.setItem(`${foods[0].id}`, `${foods[0].name}`);
  //     foods.forEach((item, index) => {
  //       terpilih.innerHTML += `<b>${item.name},</b>`;
  //     });
  //   }
  // };
  chooseBtn.addEventListener("click", (el, index) => {
    console.log(terpilih);
    el.preventDefault();
    foods.forEach((item, index) => {
      terpilih.innerHTML += `<b>${item.name} </b>`;
      // terpilih.join(", ");
      // console.log(item);
      // localStorage.setItem(`${item.id}`, `${item.name}`);
    });
  });
};
cardFood();

// Call Desc Total Calories
let nameSaved = localStorage.getItem("nameInput");
let sum = Number(localStorage.getItem("sum"));
console.log(sum);
let p = document.getElementById("deskripsiHead");
p.innerHTML = `Hai <b>${nameSaved}</b>. Jumlah kebutuhan kalorimu adalah <b>${sum.toFixed(1)} Kkal</b>. Pilihlah makanan yang kamu makan hari ini dan tracking kalorimu.`;

// Pilih makanan
// let chooseBtn = document.querySelector("choose-foods");
// let terpilih = document.getElementById("foodsTerpilih");

// chooseBtn.addEventListener("click", (el) => {
//   console.log(terpilih);
//   cardFood();
//   el.preventDefault();
//   localStorage.setItem(`${item.id}`, `${item.name}`);
// });
// terpilih.innerHTML = `Makanan yang kamu pilih: ${item.name}`;
