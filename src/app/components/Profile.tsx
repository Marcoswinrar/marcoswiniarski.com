import { Nunito } from "next/font/google"
import Avatar from "./Avatar"
import SocialMedia from "./SocialMedia"
import SocialMediaLinks from "./SocialMediaLinks"
import MenuLinks from "./MenuLinks"

const font = Nunito({ weight: '600', subsets: ['latin'] })

const Profile = () => (
  <aside className={` ${font.className} profile bg-gradient-to-r from-pink-950 to-indigo-950 w-full xl:w-[20rem] xl:h-screen`}>
    <Avatar />
    <SocialMedia />
    <SocialMediaLinks />
    <MenuLinks />
  </aside>
)

export default Profile
