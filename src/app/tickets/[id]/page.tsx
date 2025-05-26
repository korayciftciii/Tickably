"use client";
import { api } from "@/../convex/_generated/api";
import { Id } from "@/../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { redirect, useParams } from "next/navigation";
import Ticket from "@/components/Ticket";
import Link from "next/link";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { useEffect } from "react";
import Head from "next/head";


export default function TicketPage() {
    const params = useParams();
    const { user } = useUser();
    const ticket = useQuery(api.tickets.getTicketWithDetails, {
        ticketId: params.id as Id<"tickets">,
    });

    useEffect(() => {
        if (!user) {
            redirect("/");
        }

        if (!ticket || ticket.userId !== user.id) {
            redirect("/tickets");
        }

        if (!ticket.event) {
            redirect("/tickets");
        }
    }, [user, ticket]);

    if (!ticket || !ticket.event) {
        return null;
    }

    return (
        <>
            <Head>
                <title>Ticket Details | Tickably™</title>
                <meta name="description" content="View your ticket details and manage your bookings" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8 space-y-8">
                        {/* Navigation and Actions */}
                        <div className="flex items-center justify-between">
                            <Link
                                href="/tickets"
                                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to My Tickets
                            </Link>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100 border border-gray-200">
                                    <Download className="w-4 h-4" />
                                    <span className="text-sm">Save</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100 border border-gray-200">
                                    <Share2 className="w-4 h-4" />
                                    <span className="text-sm">Share</span>
                                </button>
                            </div>
                        </div>


                        {/* Event Info Summary */}
                        <div
                            className={`bg-gray-800 p-6 rounded-lg shadow-sm border ${ticket.event.is_cancelled ? "border-red-800" : "border-gray-700"}`}
                        >
                            <h1 className="text-2xl font-bold text-white">{ticket.event.name}</h1>
                            <p className="mt-1 text-gray-300">
                                {new Date(ticket.event.eventDate).toLocaleDateString()} at {ticket.event.location}
                            </p>
                            <div className="mt-4 flex items-center gap-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${ticket.event.is_cancelled
                                        ? "bg-red-900 text-red-300"
                                        : "bg-green-900 text-green-300"
                                        }`}
                                >
                                    {ticket.event.is_cancelled ? "Cancelled" : "Valid Ticket"}
                                </span>
                                <span className="text-sm text-gray-400">
                                    Purchased on {new Date(ticket.purchasedAt).toLocaleDateString()}
                                </span>
                            </div>
                            {ticket.event.is_cancelled && (
                                <p className="mt-4 text-sm text-red-400">
                                    This event has been cancelled. A refund will be processed if it hasn&apos;t been already.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Ticket Component */}
                    <Ticket ticketId={ticket._id} />

                    {/* Additional Information */}
                    <div
                        className={`mt-8 rounded-lg p-4 border ${ticket.event.is_cancelled ? "bg-red-950 border-red-800" : "bg-blue-950 border-blue-800"}`}
                    >
                        <h3
                            className={`text-sm font-medium ${ticket.event.is_cancelled ? "text-red-200" : "text-blue-200"}`}
                        >
                            Need Help?
                        </h3>
                        <p
                            className={`mt-1 text-sm ${ticket.event.is_cancelled ? "text-red-400" : "text-blue-400"}`}
                        >
                            {ticket.event.is_cancelled
                                ? "For questions about refunds or cancellations, please contact our support team at koraycftci@gmail.com"
                                : "If you have any issues with your ticket, please contact our support team at koraycftci@gmail.com"}
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
}