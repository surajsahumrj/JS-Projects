const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "spinner.svg";

        const response = await fetch("https://api.waifu.pics/sfw/waifu");
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = "Anime Waifu";
    } catch (error) {
        console.error(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error occurred. Please try again.";
    }
});
