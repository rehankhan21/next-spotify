import "./globals.css";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Next Spotify",
  description: "Listen To Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* this does not mean that everything in the sidebar will be clietn component
          thats because we are passing the whats inside the sidebar as children, so they will
          remain as serverside components
        */}
      <body className={font.className}>
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
