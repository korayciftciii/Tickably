import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className="bg-white min-h-screen py-16 px-6 sm:px-8 lg:px-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>

                <p className="text-lg text-gray-600 mb-8">
                    Your privacy is important to us. This page explains how we handle your data at <span className="font-semibold text-gray-900">Tickably™</span>.
                </p>

                {/* SECTION 1 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
                    <p className="text-gray-700 mb-2">
                        We collect personal data to deliver and improve our services. This includes:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>User data via <Link href="https://clerk.com/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-800">Clerk</Link> (e.g. name, email, profile image)</li>
                        <li>Uploaded event and ticket details</li>
                        <li>Payment and billing data via <Link href="https://stripe.com/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-800">Stripe</Link></li>
                        <li>Analytics and usage data (e.g. IP, device type)</li>
                    </ul>
                </section>

                {/* SECTION 2 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-2">We use your information to:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Facilitate secure ticket purchases and sales</li>
                        <li>Authenticate users and manage accounts</li>
                        <li>Send transaction-related emails</li>
                        <li>Prevent fraud and maintain platform integrity</li>
                    </ul>
                </section>

                {/* SECTION 3 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">3. Platform Fees and Payments</h2>
                    <p className="text-gray-700">
                        We charge a 1% platform commission on each ticket sale. Stripe processes all payments and also deducts a small fee. We do not store your card details.
                    </p>
                </section>

                {/* SECTION 4 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">4. Data Sharing</h2>
                    <p className="text-gray-700">
                        Your data is only shared with essential third-party services (e.g., <Link href="https://stripe.com/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-800">Stripe</Link>, <Link href="https://clerk.com/privacy" target="_blank" className="text-blue-600 underline hover:text-blue-800">Clerk</Link>). We never sell or rent your data to advertisers.
                    </p>
                </section>

                {/* SECTION 5 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">5. Your Rights</h2>
                    <p className="text-gray-700">
                        You can view, update, or delete your personal data anytime from your account dashboard. For assistance, contact us at{" "}
                        <a href="mailto:team@tickably.com" className="text-blue-600 underline hover:text-blue-800">koraycftci@gmail.com</a>.
                    </p>
                </section>

                {/* SECTION 6 */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">6. Policy Updates</h2>
                    <p className="text-gray-700">
                        We may revise this Privacy Policy occasionally. All changes will be posted here, and material changes will be notified to users.
                    </p>
                </section>

                <p className="text-sm text-gray-500 mt-12">Last updated: May 26, 2025</p>
            </div>
        </div>
    )
}
