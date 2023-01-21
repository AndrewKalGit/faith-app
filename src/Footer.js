import React, { useRef } from 'react';
import Logo from './img/faithlogo.png';
import emailjs from '@emailjs/browser';

export const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_mqy7y35', 'template_b2zkcza', form.current ,'pWK-1B7t6ZNPqH79e').then((result) => {
    console.log(result.text)},
    (error) => {
        console.log(error.text);
    });
};

return (
<>
<footer aria-label="Site Footer" class="bg-white lg:grid lg:grid-cols-2" id="footer">
<div>
    <div class='flex justify-center'>
    <img alt="logo" src={Logo}/>
    </div>
    <address class='flex justify-center'>
    믿음 장로 교회
    <br/>
    The Faith Korean Presbyterian Church
    <br/>
    1209 W. Front St. Lincroft, NJ 07738
    </address>
    <div class='flex justify-center mt-4'>
    <a href="tel:732-747-2991" class='font-bold'> 732-747-2991 </a>
    </div>
</div>
<div class="px-4 sm:px-6 lg:col-span-1 lg:px-8">
<div class="grid grid-cols-1 gap-8 sm:grid-cols-1">
<div>   
<section class="bg-white">
  <div class="mx-auto max-w-screen-xl">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-1">
      <div>
        <div class="mt-8">
        </div>
      </div>
      <div class="rounded-lg bg-gray-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={sendEmail} ref={form} class="space-y-4">
          <div>
            <label class="sr-only" for="name">Name</label>
            <input
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name*"
              type="text"
              required
              id="name"
              name="from_name"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="sr-only" for="email">Email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address*"
                required
                type="email"
                id="email"
                name="reply_to_email"
              />
            </div>

            <div>
              <label class="sr-only" for="phone">Phone</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number*"
                type="tel"
                id="phone"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}|[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{1}[0-9]{3}[0-9]{3}[0-9]{4}"
                required
                name="reply_to_number"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          </div>

          <div>
            <label class="sr-only" for="message">Message</label>
            <textarea
              class="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
              name="message"
            ></textarea>
          </div>

          <div class="mt-4">
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
            >
              <span class="font-medium"> Send Inquiry </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
</div>

<div class="pt-12 mt-12 border-t border-gray-100">
    </div>
  </div>
</footer>
    <div class="sm:flex sm:items-center sm:justify-center">

        <p class="mb-8 text-sm text-gray-900 sm:mt-0">
          &copy; 2023. Echo Web LLC. All rights reserved.
        </p>
      </div> 
</>
    );
}

export default Footer;