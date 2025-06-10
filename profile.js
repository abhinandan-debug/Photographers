function getPhotographerIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

async function loadPhotographerProfile() {
    const id = getPhotographerIdFromUrl();

    try {
        const response = await fetch("https://photographers-f0hv.onrender.com");
        const data = await response.json();
        const photographer = data.photographers.find(p => p.id === id);

        if (!photographer) {
            document.querySelector(".profile-container").innerHTML = "<p>Photographer not found.</p>";
            return;
        }

        // Update text content
        document.getElementById("photographerName").textContent = photographer.name;
        document.getElementById("photographerBio").textContent = photographer.bio;
        document.getElementById("photographerPrice").textContent = `Price: ₹${photographer.price}`;

        // Styles and Tags
        document.getElementById("photographerStyles").innerHTML = `
            <strong>Styles:</strong> ${photographer.styles.join(", ")}<br>
            <strong>Tags:</strong> ${photographer.tags.join(", ")}
        `;

        // Portfolio / Gallery
        const gallery = document.getElementById("galleryGrid");
        gallery.innerHTML = "";
        photographer.portfolio?.forEach(imgUrl => {
            const img = document.createElement("img");
            img.src = imgUrl;
            img.alt = photographer.name;
            img.className = "gallery-img"; // Add styles in CSS
            gallery.appendChild(img);
        });

        // Reviews
        const reviewsContainer = document.getElementById("reviewsList");
        reviewsContainer.innerHTML = "";
        photographer.reviews?.forEach(review => {
            const div = document.createElement("div");
            div.className = "review";
            div.innerHTML = `
                <strong>${review.name}</strong> (${review.rating}/5) - <em>${review.date}</em><br>
                <p>${review.comment}</p>
            `;
            reviewsContainer.appendChild(div);
        });

    } catch (error) {
        console.error("Error loading profile:", error);
        document.querySelector(".profile-container").innerHTML = "<p>Failed to load profile data.</p>";
    }
}

window.addEventListener("DOMContentLoaded", loadPhotographerProfile);

// Add your JavaScript code here

function openInquiry() {
    document.getElementById('inquiryModal').style.display = 'block';
}

function closeInquiry() {
    document.getElementById('inquiryModal').style.display = 'none';
}

// Optional: Close modal when clicking outside modal content
window.onclick = function(event) {
    var modal = document.getElementById('inquiryModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
