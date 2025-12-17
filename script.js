const container = document.getElementById("products");


fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
data.forEach(p => {
const card = document.createElement("div");
card.className = "card";
card.innerHTML = `
<img src="${p.image}" />
<div class="category">${p.category}</div>
<div class="title">${p.title}</div>
<div class="price">$${p.price}</div>
<div class="rating">⭐ ${p.rating.rate} / 5 (${p.rating.count} reviews)</div>
<div class="actions">
<button class="btn edit">Edit</button>
<button class="btn delete">Delete</button>
</div>
`;
container.appendChild(card);
});
});