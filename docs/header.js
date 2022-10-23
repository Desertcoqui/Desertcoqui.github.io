class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <header class="p-6">
    <!-- NAVBAR -->
    <nav class="container flex items-center justify-between w-full mx-auto border-b-8 border-cyan-500">
      <!-- Left Logo -->
      <div class="text-6xl">Ferdinand Detres Jr</div>

      <!-- Hamburger button -->

      <button type="button" class="md:hidden" onclick="hamburger()">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Hamburger ends -->


      <!-- Nav Menu -->
      <ul
        class="fixed left-0 right-0 min-h-screen p-4 space-y-4 transform translate-x-full bg-black md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0">
        <li>
          <a href="index.html" class="text-white">Home</a>
        </li>
        <li>
          <a href="./web-430/detres-tech-value-stream.html" class="text-white">DevOps</a>
        </li>
        <li>
          <a href="project.html" class="text-white">Projects</a>
        </li>
        <li>
          <a href="database.html" class="text-white">Databases</a>
        </li>
        <li>
          <a href="api.html" class="text-white">API Unit Test</a>
        </li>
        <li>
          <a href="bucket.html" class="text-white">Bucket List</a>
        </li>
      </ul>
      <!-- End Nav Menu -->
    </nav>
    <!-- End Nav Bar -->

    <!-- Mobile Navbar -->
    <div class="container items-center justify-between w-full p-4 mx-auto lg:flex">
      <div id="popOutNavbar">
        <nav
          class="absolute flex flex-col items-center justify-center w-full p-8 bg-gradient-to-tr from-black-600 to-gray-500 bg-cyan-500 hover:bg-gray-600 md:flex-row md:justify-end md:relative md:h-auto display:none">
          <ul>
            <li><a href="index.html" class="text-4xl hover:bg-cyan-600 ">Home</a></li>
            <li><a href="./web-430/detres-tech-value-stream.html" class="text-4xl hover:bg-cyan-600">Resume</a></li>
            <li><a href="project.html" class="text-4xl hover:bg-cyan-600">Projects</a></li>
            <li><a href="database.html" class="text-4xl hover:bg-cyan-600">Databases</a></li>
            <li><a href="api.html" class="text-4xl hover:bg-cyan-600">API Unit Test</a></li>
            <li><a href="bucket.html" class="text-4xl hover:bg-cyan-600">Bucket List</a></li>


          </ul>
        </nav>
      </div>
    </div>
    <!-- End Mobile Navbar -->
  </header>
        `;
  }
}

customElements.define("header-component", Header);
