import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Banner(props) {
    return (
<>
<section
  class="relative bg-[url('./img/praise.jpg')] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute inset-0 bg-gray-700/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray-900/75 sm:to-white/25"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
        Title.

        <strong class="block font-extrabold text-gray-200">
          Example Text.
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="https://www.google.com/maps/place/Faith+Korean+Presbyterian+Church/@40.3451212,-74.1211808,17z/data=!3m1!4b1!4m5!3m4!1s0x89c231f96ee8a9fd:0x24f07966e96467e9!8m2!3d40.3451517!4d-74.1189908"
          target='_blank'
          class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gray-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto" rel="noreferrer"
        >
          Directions
        </a>
           <HashLink
          class="block w-full rounded bg-gray-400 px-12 py-3 text-sm font-medium text-gray-50 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto" rel="noreferrer"
          smooth to="/#footer"
        >
          Contact
        </HashLink>
      </div>
    </div>
  </div>
</section>
</>
    );
}

export default Banner;  