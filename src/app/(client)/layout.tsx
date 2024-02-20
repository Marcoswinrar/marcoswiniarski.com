import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Profile from "../components/Profile";
import ToolsBar from "../components/ToolsBar";
import "./globals.css";

const font = Nunito({ weight: '600', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Home | Marcos Eduardo Winiarski",
  description: "A blog developed for dev to dev"
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => (
  <html lang="en">
    <body className={`${font.className} ${bodyStyle}`}>
        <Profile />
        <main className={baseLayout}>
          {children}
        </main>
        <ToolsBar />
    </body>
  </html >
);


export default RootLayout

const baseLayout = `
  base__
  xl:pl-[20rem] 
  max-xl:pt-[4rem]
  h-screen
`

const bodyStyle = `
  h-full 
  bg-slate-950 
  text-amber-50 
  selection:bg-purple-500
`