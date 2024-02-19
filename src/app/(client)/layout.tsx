import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Provider } from "../utils/Provider";
import Profile from "../components/Profile";
import "./globals.css";
import ToolsBar from "../components/ToolsBar";

const font = Nunito({ weight: '600', subsets: ['latin'] })

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
      <body className={`${font.className} ${bodyStyle}`}>
        <Provider>
          <div className="layout-wrapper flex flex-col xl:flex-row">
            <Profile />
            <main className="w-screen">
              {children}
            </main>
            <ToolsBar />
          </div>
        </Provider>
      </body>
    </html >
  );
}

const bodyStyle = `
  h-full 
  bg-amber-50 
  text-indigo-950 
  dark:bg-slate-950 
  dark:text-amber-50 
  dark:selection:bg-purple-500
`