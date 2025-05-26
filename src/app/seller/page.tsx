import SellerDashboard from "@/components/SellerDashboard";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
    title: "Seller Dashboard | Tickably™",
    description: "Manage your events and tickets",
};
export default async function SellerPage() {
    const { userId } = await auth();
    if (!userId) redirect("/");

    return (
        <div className="min-h-screen bg-gray-50">
            <SellerDashboard />
        </div>
    );
}