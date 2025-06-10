let photographers = [];
let visibleCount = 6;

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  document.getElementById("searchInput").addEventListener("input", debounce(applyFilters, 300));
  document.getElementById("sortSelect").addEventListener("change", applyFilters);
  document.getElementById("citySelect").addEventListener("change", applyFilters);
  document.getElementById("priceRange").addEventListener("input", applyFilters);
  document.getElementById("ratingSelect").addEventListener("change", applyFilters);
  document.querySelectorAll(".styleCheck").forEach(cb =>
    cb.addEventListener("change", applyFilters)
  );
  document.getElementById("loadMoreBtn").addEventListener("click", loadMore);
});

function fetchData() {
  fetch("https://photographers-f0hv.onrender.com")
    .then(res => res.json())
    .then(data => {
      photographers = data;
      applyFilters();
    });
}

function applyFilters() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const sort = document.getElementById("sortSelect").value;
  const city = document.getElementById("citySelect").value;
  const maxPrice = parseInt(document.getElementById("priceRange").value);
  const minRating = parseFloat(document.getElementById("ratingSelect").value);
  const selectedStyles = Array.from(document.querySelectorAll(".styleCheck:checked")).map(cb => cb.value);

  document.getElementById("priceValue").textContent = `₹${maxPrice}`;

  let filtered = photographers.filter(p => {
    const matchesSearch =
      p.name.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.tags.join(" ").toLowerCase().includes(query);

    const matchesCity = city ? p.location === city : true;
    const matchesPrice = p.price <= maxPrice;
    const matchesRating = p.rating >= minRating;
    const matchesStyle =
      selectedStyles.length === 0 ||
      selectedStyles.some(style => p.styles.includes(style));

    return matchesSearch && matchesCity && matchesPrice && matchesRating && matchesStyle;
  });

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "recent") {
    filtered.sort((a, b) => b.id - a.id);
  }

  renderPhotographers(filtered.slice(0, visibleCount));
}

function loadMore() {
  visibleCount += 6;
  applyFilters();
}

function renderPhotographers(list) {
  const grid = document.getElementById("photographerGrid");
  grid.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.profilePic}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.location}</p>
      <p>₹${p.price} | ⭐ ${p.rating}</p>
      <div class="tags">${p.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <button onclick="viewProfile(${p.id})">View Profile</button>
    `;
    grid.appendChild(card);
  });
}

function viewProfile(id) {
  window.location.href = `profile.html?id=${id}`;
}

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
