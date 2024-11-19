//Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (this.window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.querySelectorAll("[data-target]").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            console.log(`Scrolling to: ${targetId}`);
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector("header").offsetHeight,
                behavior: "smooth"
            });
        } else {
            console.error(`Element with ID ${targetId} not found.`);
        }
    });
});