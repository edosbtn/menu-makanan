const menuItems = [
    { name: "Nasi Goreng", price: "Rp. 20,000" },
    { name: "Mie Goreng", price: "Rp. 18,000" },
    { name: "Sate Ayam", price: "Rp. 25,000" },
    { name: "Gado-Gado", price: "Rp. 15,000" }
];

const menuList = document.getElementById('menu');

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} <span>${item.price}</span>`;
    menuList.appendChild(li);
});
