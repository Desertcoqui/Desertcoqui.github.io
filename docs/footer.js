class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
         <footer class="absolute bottom-0 w-full">
    <div class="p-2 bg-cyan-600 mw-5">
      <ul class="text-center">

        <li class="">
          <a href="https://github.com/Desertcoqui" target="_blank">
            GITHUB
          </a>

        </li>
        <li>
          <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank">
            Bellevue University BS. WEB DEV
          </a>

        </li>
        <li>
          <a href="https://github.com/buwebdev" target="_blank">
            Bellevue University GITHUB
          </a>

        </li>
      </ul>
    </div>


  </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
