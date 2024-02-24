import React, { useState } from 'react';
export default function Adminsignup(){
    return <div>
        <section class="flex flex-col md:flex-row h-screen items-center">
        <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
        <div class="w-full h-100">
                <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Sign Up to your account</h1>
            <form class="mt-6" action="#" method="POST">
            <div>
                <label class="block text-gray-700">Email Address</label>
                    <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required></input>
            </div>
            <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                    <input type="password" name="" id="" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required></input>
            </div>
            <div class="text-right mt-2">
            </div>
            <button type="submit" onClick={Adminsignup} class="w-full block bg-gray-800 hover:bg-grey-400 focus:bg-grey-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign Up</button>
            </form>
            <p class="mt-8">Already have an account? <a href="#" class="text-grey-800 hover:text-blue-700 font-semibold">Log In</a></p>
             
        </div>
        </div>
        </section>
    </div>
}