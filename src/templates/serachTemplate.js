export function searchTemplate() {
  return `
    <div class="container mt-4">
      <h2 class="text-center">Buscar Pokémon</h2>
      <div class="input-group mb-3">
        <input type="text" id="searchInput" class="form-control" placeholder="Ingrese el nombre o número del Pokémon">
        <button id="searchBtn" class="btn btn-success">Buscar</button>
      </div>
      <div id="searchResult" class="text-center"></div>
    </div>
  `
}
