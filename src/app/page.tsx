import EventList from "@/components/EventList";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Tickably™",
  description: "A modern ticketing platform for events",
  icons: {
    icon: '/favicon.png', // /public path
  },
};
export default function Home() {
  return (
    <>
      <EventList />
    </>
  );
}
