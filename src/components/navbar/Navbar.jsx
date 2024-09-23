import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar"> 
        {/* Navbar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
            >
              Master Dev
            </motion.span>
            <div className="social">
                <a href="https://github.com/Rufi-j"><img src="/github4.png" alt="" /></a>
                <a href="https://www.instagram.com/rufai.t/"><img src="/instagram2.png" alt="" /></a>
                <a href="www.linkedin.com/in/rufai-taiye"><img src="/linkedin1.png" alt="" /></a>
            </div>
        </div>
    </div>

  )
}

export default Navbar