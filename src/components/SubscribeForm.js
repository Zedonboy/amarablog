import React from 'react'

const SubscribeForm = () => (
    <section className="flex md:flex-row justify-center flex-wrap spacing-x-4">
        <input type="email" placeholder="Your Email" className="font-sans w-full md:w-2/3 p-4 rounded border-2 border-emerald-500"/>
        <button className="bg-green-normal mt-1 md:mt-0 focus:bg-green-dark hover:bg-green-dark p-4 ml-2 text-white rounded">Subscribe</button>
    </section>
)

export default SubscribeForm