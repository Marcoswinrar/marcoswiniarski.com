import Avatar from "./Avatar"
import SocialMedia from "./SocialMedia"
import SocialMediaLinks from "./SocialMediaLinks"
import MenuLinks from "./MenuLinks"

const Profile = () => {
  return (
    <aside className={profileStyle}>
      <Avatar />
      <SocialMedia />
      <SocialMediaLinks />
      <MenuLinks />
    </aside>
  )
}

export default Profile

const profileStyle = `
  profile 
  bg-gradient-to-r 
  from-pink-950 
  to-indigo-950 
  w-full 
  xl:w-[25rem] 
  xl:h-screen
`
