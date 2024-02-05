import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Navbar from "./components/Navbar";
import { Provider } from "./utils/Provider";
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Geeker Code Blog",
  description: "A blog developed for dev to dev"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`}>
        <Provider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-6">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
