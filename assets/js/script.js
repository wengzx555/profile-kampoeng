// Untuk menambahkan efek ketikan kedalam class typing

var typed = new Typed(".typing", {
    strings: ["Selamat Datang di Kampung Panggang", "Budaya dan Tradisi yang kaya", "Suasana yang Asri dan Nyaman"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});


// script Back to Top

function scrollKeatas() {
    window.scrollTo({
        top: 0
    })
}

// Hamburger Menu

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});