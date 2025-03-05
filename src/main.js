import './style.css'
import { homeTemplate } from "./templates/homeTemplate.js";
import { searchTemplate } from "./templates/serachTemplate.js";
import { loadPokedex } from "./components/pagination.js";

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.querySelector("#app");

  async function renderPage(page) {
    switch (page) {
      case "pokedex":
        await loadPokedex();
        break;
      case "search":
        app.innerHTML = searchTemplate();
        break;
      default:
        app.innerHTML = await homeTemplate();
        break;
    }
  }

  document.querySelectorAll("nav a[data-page]").forEach((link) => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("data-page");
      await renderPage(page);
    });
  });

  renderPage("home");
});
