const menuItems = [
    { name: "PAHA AYAM KAMPUNG ASLI", price: "Rp. 25.000", img: "images/paha-ayam-kampung.jpg" },
    { name: "DADA AYAM KAMPUNG ASLI", price: "Rp. 25.000", img: "images/dada-ayam-kampung.jpg" },
    { name: "PAHA BEBEK", price: "Rp. 25,000", img: "images/dada-bebek.jpg" },
    { name: "DADA BEBEK", price: "Rp. 25,000", img: "images/paha-bebek.jpg" },
    { name: "LELE (isi 2)", price: "Rp. 12,000", img: "images/lele.jpg" },
    { name: "PUYUH", price: "Rp. 13,000", img: "images/puyuh.jpg" },
    { name: "KEPALA AYAM KAMPUNG (isi 2)", price: "Rp. 12,000", img: "images/kepala-ayam-kampung.jpg" },
    { name: "JEROAN (2 pasang)", price: "Rp. 13,000", img: "images/jeroan-rempela-ati.jpg" },
    { name: "BELUT", price: "Rp. 12,000", img: "" },
    { name: "KEPALA BEBEK (isi 2)", price: "Rp. 18,000", img: "" },
    { name: "TEMPE PENYET", price: "Rp. 6,000", img: "" },
    { name: "TEMPE TAHU PENYET", price: "Rp. 6,000", img: "" },
    { name: "SAMBAL TERONG", price: "Rp. 6,000", img: "" }

];

const menuList = document.getElementById('menu');

menuItems.forEach(item => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.name;

    const div = document.createElement('div');
    const nameSpan = document.createElement('span');
    nameSpan.textContent = item.name;
    const priceSpan = document.createElement('span');
    priceSpan.textContent = item.price;
    priceSpan.classList.add('price');

    div.appendChild(nameSpan);
    div.appendChild(priceSpan);

    li.appendChild(img);
    li.appendChild(div);
    menuList.appendChild(li);
});
