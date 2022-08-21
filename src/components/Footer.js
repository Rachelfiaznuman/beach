import React from 'react';
import {FaFacebook,FaGithub,FaInstagram,FaTwitter,FaTwitch}
from "react-icons/fa"

function Footer() {
  return (
    <div class="w-full mt-24 bg-slate-900 text-gray py-y px-2">
        <div class="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 text-white">
            <div>
                <h6 class="font-bold uppercase pt-2">Solutions</h6>
                <ul>
                    <li class="py-1">Marketing</li>
                    <li class="py-1">Analytics</li>
                    <li class="py-1">Commerce</li>
                    <li class="py-1">Data</li>
                    <li class="py-1">Cloud</li>
                </ul>
            </div>
            <div>
                <h6 class="font-bold uppercase pt-2">Support</h6>
                <ul>
                    <li class="py-1">Pricing</li>
                    <li class="py-1">Documentation</li>
                    <li class="py-1">Guides</li>
                    <li class="py-1">API Status</li>
                </ul>
            </div>
            <div>
                <h6 class="font-bold uppercase pt-2">Company</h6>
                <ul>
                    <li class="py-1">About</li>
                    <li class="py-1">Blog</li>
                    <li class="py-1">Jobs</li>
                    <li class="py-1">Press</li>
                    <li class="py-1">Partners</li>
                </ul>
            </div>
            <div>
                <h6 class="font-bold uppercase pt-2">Legal</h6>
                <ul>
                    <li class="py-1">Claims</li>
                    <li class="py-1">Privacy</li>
                    <li class="py-1">Terms</li>
                    <li class="py-1">Policies</li>
                    <li class="py-1">Conditions</li>
                </ul>
            </div>
            <div class="col-span-2 pt-8 md:pt-2">
            <p class="font-bold uppercase">Subcribe to our newsletter</p>
            <p class="py-4">The latest news,articles,and resources,sent to your inbox weekly</p>
            <form class="flex flex-col sm:flex-row">
                <input class="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder='Enter email...'/>
                <button class="p-2 mb-4">Subcribe</button>
            </form>
            </div>
        </div>

        <div class=" flex flex-col max-w-[1240px] px-2 py-4 mx-auto  justify-between sm:flex-row text-center text-gray-500">
            <p class="py-4">2022 Workflow,LLC. All rights reserved</p>
            <div class="flex justify-between sm:w-[300px] pt-4 text-2xl">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaTwitch/>
                <FaGithub/>
            </div>
        </div>
    </div>
  )
}

export default Footer