import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-20 ">
      <div className="container mx-auto px-6 text-center space-y-6">
        <h2 className="text-2xl font-bold text-purple-400">Let's Connect!</h2>
        <p className="text-gray-400">Follow me on my social media and stay updated.</p>
       
        <hr className="border-gray-700 my-6" />
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Vikram Singh. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
