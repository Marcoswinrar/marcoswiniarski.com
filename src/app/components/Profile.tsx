import Avatar from "./Avatar"
import SocialMedia from "./SocialMedia"
import SocialMediaLinks from "./SocialMediaLinks"
import MenuLinks from "./MenuLinks"


const Profile = () => {
  return (
    <aside className={`profile bg-gradient-to-r from-pink-950 to-indigo-950 w-full xl:w-[20rem] xl:h-screen`}>
      <Avatar />
      <SocialMedia />
      <SocialMediaLinks />
      <MenuLinks />
    </aside>
  )
}

export default Profile
