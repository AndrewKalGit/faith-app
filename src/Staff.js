import React from 'react';
import StaffImg from './img/staff.jpeg';
import { Helmet } from 'react-helmet';

function Staff(props) {
    return (
        <section>
            <Helmet>
                <title> Staff </title>
                 <meta charSet='utf-8'/>
            </Helmet>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Staff"
          src={StaffImg}
          class="absolute inset-0 h-full w-full object-contain"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Meet the Staff!</h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
      </div>
    </div>
  </div>
</section>
    );
}

export default Staff;