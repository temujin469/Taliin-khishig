const myHeader = `
 <header class="header-section relative md:h-[90vh] h-[65vh]">

    <!-- navbar start -->
    <nav class="lg:container shadow-md block mx-auto fixed top-0 w-full md:static md:shadow-none z-50">
      <div class="nav-row-1 md:flex justify-end items-center hidden h-[50px] border-b bottom-1">
        <div class="language-option-wrapper flex items-center">
          <p class="text-white pr-2">English</p>
          <ion-icon name="chevron-down-outline" class="text-white"></ion-icon>
        </div>
      </div>
      <div class="nav-row-2 px-4 bg-white md:bg-transparent flex justify-between items-center md:h-[100px] h-[60px]">
        <div class="flex items-center justify-between w-full">
          <a href="/index.html" class="logo-wrapper flex items-center">
            <img src="../assets/images/logo1.png" alt="logo" class="logo w-12 md:w-20">
            <h2 class="logo-title hidden md:text-white font-semibold md:block">TALIIN KHISHIG MINING</h2>
          </a>
          <div class="flex items-center md:hidden">
            <div>
              <ion-icon name="search-outline" class="text-[30px] pr-4"></ion-icon>
            </div>
            <div>
              <label for="check" class="menu-button cursor-pointer">
                <ion-icon name="menu-outline" class="text-[40px]"></ion-icon>
              </label>
            </div>
          </div>
        </div>
        <ul
          class="nav-menu bg-black/80 overflow-hidden top-[60px] md:bg-transparent text-center md:flex justify-between items-center w-full fixed md:static left-0">
          <li
            class="my-[50px] md:my-0 flex items-center justify-center border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
            <a href="/aboutUs.html" class="nav-link active text-white">About</a>
            <ion-icon name="chevron-down-outline" class="text-white pl-2"></ion-icon>
          </li>
          <li
            class="my-[50px] md:my-0 flex items-center justify-center border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
            <a href="/servicePage/mining.html" class="nav-link text-white">Service</a>
            <ion-icon name="chevron-down-outline" class="text-white pl-2"></ion-icon>
          </li>
          <li
            class="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
            <a href="/project.html" class="nav-link text-white">Project</a>
          </li>
          <li
            class="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
            <a href="/careers.html" class="nav-link text-white">Careers</a>
          </li>
          <li
            class="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
            <a href="/news.html" class="nav-link text-white">News</a>
          </li>
          <li
            class="my-[50px] md:my-0 border-y-4 transition-all duration-200 py-1 ease-in border-transparent hover:border-b-[#dd5900]">
            <a href="/contactUs.html" class="nav-link text-white">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- navbar end -->
    <div
      class="text-white lg:px-10 relative top-[63vh] mt-[60px] md:mt-0 md:static md:h-[calc(80vh-150px)] flex flex-col-reverse md:container md:mx-auto">
      <div
        class="md:max-w-[700px] bg-gradient-to-br from-[#e77021] to-[#f5b062] md:bg-none pb-32 pt-16 px-10 md:px-0 md:pb-16">
        <p class="text-3xl font-semibold mb-10 md:mb-5">Your road to the future resources.</p>
        <p class="font-medium text-lg">What we produce is essential for the world to continue to grow and many of our
          products
          will help make the
          transition to
          cleaner energy possible</p>
      </div>
    </div>
  </header>
`;

const header = document.getElementById("header");

header.innerHTML = myHeader;

const menuBtn = document.querySelector(".menu-button");

menuBtn.addEventListener("click", () => {
  let navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
});
