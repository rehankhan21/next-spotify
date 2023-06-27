import "./globals.css";
import { Figtree } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

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
        {/* wrap our entire app in the supabase provider */}
        {/* Toaster provider is seperate from all the supabase provider stuff
          so we put it outside of supabase provider
        */}
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
