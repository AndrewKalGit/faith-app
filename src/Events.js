import React from 'react';
import { Helmet } from 'react-helmet';

function Events(props) {
    return (
        <>
        <Helmet>
            <meta charSet='utf-8'/>
            <title> Faith </title>
        </Helmet>
        <div class="mt-16">
        <h1 class="text-center font-bold text-xl">
            Connect with us!
        </h1>
        <h2 class="text-center font-semibold text-lg">
            Inquire about any upcoming events
            <br/>
            Join us! 
        </h2>
        </div>
        </>
    );
}

export default Events;