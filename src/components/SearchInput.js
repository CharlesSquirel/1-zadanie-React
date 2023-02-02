import "./SearchInput.css";

export default function SearchInput() {
  return (
    <header class="search-box">
      <h1 class="heading-text">
        <label for="search-input">Cars</label>
      </h1>
      <input type="text" id="search-input" class="search-input" placeholder="Search cars..." />
    </header>
  );
}
