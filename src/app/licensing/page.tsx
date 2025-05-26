import React from 'react'

export default function page() {
    return (
        <div className="bg-white min-h-screen py-16 px-6 sm:px-8 lg:px-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Licensing</h1>

                <p className="text-lg text-gray-600 mb-8">
                    This page outlines the terms under which you may use the content, technology, and services provided by <span className="font-semibold text-gray-900">Tickably™</span>.
                </p>

                {/* SECTION 1 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">1. Platform Ownership</h2>
                    <p className="text-gray-700">
                        All software, graphics, logos, and content on this platform are the intellectual property of Tickably™ unless otherwise stated. All rights are reserved.
                    </p>
                </section>

                {/* SECTION 2 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">2. User-Generated Content</h2>
                    <p className="text-gray-700">
                        Ticket sellers retain rights to the events and images they upload. By uploading content, sellers grant Tickably™ a non-exclusive, royalty-free license to display and promote their content on the platform.
                    </p>
                </section>

                {/* SECTION 3 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">3. Restrictions</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>You may not resell, copy, or redistribute the software or platform layout.</li>
                        <li>You may not use Tickably™ trademarks without written permission.</li>
                        <li>Reverse engineering or cloning the platform is strictly prohibited.</li>
                    </ul>
                </section>

                {/* SECTION 4 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">4. Open-Source & External Libraries</h2>
                    <p className="text-gray-700">
                        Tickably™ may use open-source libraries under respective licenses (e.g., MIT, Apache). Their licenses apply to those parts of the codebase.
                    </p>
                </section>

                {/* SECTION 5 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">5. Reporting Copyright Infringement</h2>
                    <p className="text-gray-700">
                        If you believe that any content on our platform violates your intellectual property rights, please contact us immediately at{" "}
                        <a href="mailto:legal@tickably.com" className="text-blue-600 underline hover:text-blue-800">koraycftci@gmail.com</a>.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-12">Last updated: May 26, 2025</p>
            </div>
        </div>
    )
}
