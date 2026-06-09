import type { Metadata } from "next";
import MessengerCaseStudy from "./MessengerCaseStudy";

export const metadata: Metadata = {
  title: "Messenger — Alyona Ryzhenko",
  description:
    "A redesign of a mobile messaging platform focused on reducing friction in group communication.",
};

export default function MessengerPage() {
  return <MessengerCaseStudy />;
}
