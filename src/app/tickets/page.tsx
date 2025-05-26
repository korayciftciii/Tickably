"use client";

import { api } from "@/../convex/_generated/api";
import { useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import TicketCard from "@/components/TicketCard";
import { Ticket } from "lucide-react";
import Head from "next/head";
export default function MyTicketsPage() {
    const { user } = useUser();
    const tickets = useQuery(api.events.getUserTickets, {
        userId: user?.id ?? "",
    });

    if (!tickets) return null;

    const validTickets = tickets.filter((t) => t.status === "valid");
    const otherTickets = tickets.filter((t) => t.status !== "valid");

    const upcomingTickets = validTickets.filter(
        (t) => t.event && t.event.eventDate > Date.now()
    );
    const pastTickets = validTickets.filter(
        (t) => t.event && t.event.eventDate <= Date.now()
    );

    return (
        <>
            <Head >
                <title>Tickets | Tickably™</title>
                <meta name="description" content="View your ticket and manage your bookings" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white">My Tickets</h1>
                            <p className="mt-2 text-gray-400">
                                Manage and view all your tickets in one place
                            </p>
                        </div>
                        <div className="bg-gray-800 px-4 py-2 rounded-lg shadow-sm border border-gray-700">
                            <div className="flex items-center gap-2 text-gray-200">
                                <Ticket className="w-5 h-5" />
                                <span className="font-medium">
                                    {tickets.length} Total Tickets
                                </span>
                            </div>
                        </div>
                    </div>

                    {upcomingTickets.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Upcoming Events
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {upcomingTickets.map((ticket) => (
                                    <TicketCard key={ticket._id} ticketId={ticket._id} />
                                ))}
                            </div>
                        </div>
                    )}

                    {pastTickets.length > 0 && (
                        <div className="mb-12">
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Past Events
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {pastTickets.map((ticket) => (
                                    <TicketCard key={ticket._id} ticketId={ticket._id} />
                                ))}
                            </div>
                        </div>
                    )}

                    {otherTickets.length > 0 && (
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                Other Tickets
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {otherTickets.map((ticket) => (
                                    <TicketCard key={ticket._id} ticketId={ticket._id} />
                                ))}
                            </div>
                        </div>
                    )}

                    {tickets.length === 0 && (
                        <div className="text-center py-12">
                            <Ticket className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-white">
                                No tickets yet
                            </h3>
                            <p className="text-gray-400 mt-1">
                                When you purchase tickets, they&apos;ll appear here
                            </p>
                        </div>
                    )}
                </div>
            </div>

        </>
    );
}