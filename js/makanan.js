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
                    <a href="#" class="cart-btn">Pilih</a>
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
