import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Provider } from "../utils/Provider";
import Profile from "../components/Profile";
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Marcos Eduardo Winiarski",
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
          <div className="layout-wrapper flex flex-col xl:flex-row">
            <Profile />
            <main className="mx-auto max-w-full">
              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html >
  );
}
