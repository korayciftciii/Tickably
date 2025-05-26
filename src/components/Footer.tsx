"use client"
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import logo from "@/../images/logo.png";
export default function Footer() {
    return (
        <footer className="bg-gray-900 rounded-lg shadow-sm m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="font-bold shrink-0">
                        <Image
                            src={logo}
                            alt="logo"
                            width={100}
                            height={100}
                            className="w-24 lg:w-28"
                        />
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <Link href="/" className="hover:underline me-4 md:me-6">Events</Link>
                        </li>
                        <li>
                            <Link href="/privacypolicy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="/licensing" className="hover:underline me-4 md:me-6">Licensing</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-400 sm:text-center">
                    © 2025 <Link href="/contact" className="hover:underline text-white">Tickably™</Link>. All Rights Reserved. | Developed by
                    <Link href="https://www.linkedin.com/in/koray-ciftci-814392257/" className="hover:underline text-white ml-1">Koray Ciftci</Link>
                </span>
            </div>
        </footer>




    )
}
