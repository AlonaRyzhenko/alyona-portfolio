import type { Metadata } from "next";
import SignCaseStudy from "./SignCaseStudy";

export const metadata: Metadata = {
  title: "Sign — Alyona Ryzhenko",
  description:
    "Agreement workflow platform for commodities trading — transforming static agreements into lifecycle-driven workflows.",
};

export default function SignPage() {
  return <SignCaseStudy />;
}
