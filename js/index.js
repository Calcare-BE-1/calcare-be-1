let cardArtikel = document.getElementById("card-artikel");

let getCardArtikel = async () => {
  let URL = "https://63482efd0b382d796c6bc871.mockapi.io/foods";
  let response = await fetch(URL);
  let artikel = await response.json();
  console.log(artikel);
  // menampilkan 10 data digimon
  artikel.forEach((item, index) => {
      console.log(item.gambar);
      cardArtikel.innerHTML += `
      <div class="blog-box">
    <div class="blog-img">
        <img src="images/calll.webp" alt="Blog">
    </div>
    <div class="blog-text">
        <span>${item.tanggal}</span>
        <a href="#" class="blog-title">${item.judul}</a>
        <a href="${item.selengkapnya}">Selengkapnya</a>
    </div>
</div>`;
  });
};
getCardArtikel();
