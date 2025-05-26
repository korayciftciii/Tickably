import EventList from "@/components/EventList";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Tickably™",
  description: "A modern ticketing platform for events",
};
export default function Home() {
  return (
    <>
      <EventList />
    </>
  );
}
