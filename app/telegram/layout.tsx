import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join CareerX Telegram Community | Tech Professionals Network",
  description:
    "Join 2,700+ tech professionals in our Telegram community. Get curated job posts, tech discussions, and learning resources. Free to join!",
  keywords:
    "Telegram community, tech jobs, professionals, job posts, tech discussions, learning resources",
  openGraph: {
    title: "Join CareerX Telegram Community",
    description:
      "Connect with 2,700+ tech professionals and get curated job updates",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join CareerX Telegram Community",
    description:
      "Connect with 2,700+ tech professionals and get curated job updates",
  },
};

export default function TelegramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
