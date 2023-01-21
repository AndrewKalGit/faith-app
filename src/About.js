import React from 'react';
import cross from './img/cross.jpg';
import bible from './img/bible.jpg';
import { Helmet } from 'react-helmet';

function About(props) {
    return (
        <>
            <Helmet>
                <title> About </title>
            </Helmet>
            <section class='bg-gray-100'>
                <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16">
                    <div
                        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                        alt="Party"
                        src={cross}
                        class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="p-24 bg-white rounded-lg">
                        <h2 class="text-3xl font-bold sm:text-4xl">Mission</h2>
                        <p class="mt-4 text-gray-600 mb-12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>
                        <h2 class="text-3xl font-bold sm:text-4xl">Vision</h2>
                        <p class="mt-4 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                        atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                        veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;