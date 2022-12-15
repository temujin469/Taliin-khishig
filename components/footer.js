const myFooter = `
 <footer class="bg-[#353B41]">
    <div class="p-5 md:pt-20 lg:container md:px-24 lg:mx-auto  sm:p-6">
      <div class="flex md:flex-row flex-col justify-between gap-8 md:gap-6 py-10">
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center">
            <img src="../assets/images/logo1.png" class="h-20 w-20" alt="Logo" />
            <span class="self-center text-white text-lg font-semibold">TALIIN KHISHIG
              MINING</span>
          </a>
        </div>
        <div class="lg:flex gap-6">
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-white">For inquiries</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">Follow Taliin Khishig</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white">Head Office</h2>
            <ul class="text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline ">Head Office Address</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="">
          <h2 class="mb-6 text-sm font-semibold text-white uppercase">Contact us</h2>
          <form class="text-gray-400 flex flex-col">
            <label for="">Email*</label>
            <input type="text" class="outline-none rounded-lg p-1 mb-3">
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="3" class="rounded-lg outline-none p-1 mb-5"></textarea>
            <button
              class="border-[#FE7200] mx-auto md:mx-0 text-[#FE7200] hover:text-white hover:bg-[#FE7200] border-2 rounded-lg w-fit py-1 px-10">Submit</button>
          </form>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="flex sm:flex-row flex-col items-center sm:justify-between">
        <span class="text-sm sm:text-center text-gray-400  md:pb-0 pb-5">All rights reserved by ‘Taliin Khishig
          Mining LLC’ 2022
        </span>
        <span class="text-sm sm:text-center text-gray-400">Developed by Global Smart Systems LLC,
        </span>
      </div>
    </div>
  </footer>
`;

const footer = document.getElementById("footer");

footer.innerHTML = myFooter;
