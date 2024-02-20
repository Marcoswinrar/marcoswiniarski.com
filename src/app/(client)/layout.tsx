import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Provider } from "../utils/Provider";
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
      <Provider>
        <Profile />
        <main className="xl:pl-[20rem]">
          {children}
        </main>
        <ToolsBar />
      </Provider>
    </body>
  </html >
);


export default RootLayout


const bodyStyle = `
  h-full 
  bg-amber-50 
  text-indigo-950 
  dark:bg-slate-950 
  dark:text-amber-50 
  dark:selection:bg-purple-500
`