import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef()
    let user = document.getElementsByName('username');
    let useremail = document.getElementsByName('useremail');
    let message = document.getElementsByName('message');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm(
                'service_hv30k1o', // Replace with your Service ID from EmailJS
                'template_vnz11hy', // Replace with your Template ID from EmailJS
                e.target,
                'YdrpCgxxvMezncosN' // Replace with your User ID from EmailJS
            );

            console.log(result.text);
            // Clear form fields after successful submission
            
            user.e.target.value = ''
            useremail.value = ''
            message.value  = ''
            alert('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email. Please try again later.');
        }
    };
    return (
        <section id="contact">
            <div className="container h-[500px]">
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Get in touch</h2>
                <div className="md:flex justify-between items-center gap-2 ">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe
                            title='google-maps'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106376.56000668286!2d-7.6693947992873115!3d33.57240323308991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1692395285426!5m2!1sen!2sma" width="600" height="450"
                            className='border-0 w-full h-full rounded-[8px]'
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center
                    bg-indigo-200 px-4 lg:px-8 py-8 rounded-[8px]">
                        <form ref={form}
                        onSubmit={handleSubmit} 
                        className="w-full">
                            <div className="mb-5">
                                <input
                                    type="text"
                                    name='username'
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                    placeholder="Enter your Name"
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    type="email"
                                    name='useremail'
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    name='message'
                                    className="w-full p-3 focus:outline-none rounded-[5px]"
                                    rows={3}
                                    cols={8}
                                    placeholder="I'll be delighted to help you!"
                                />
                            </div>

                            <button
                                type="submit"
                                name='submit'
                                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact