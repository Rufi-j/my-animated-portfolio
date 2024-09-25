import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-router-dom';

const items = [
    {
        id: 1,
        title: "Workout App",
        img: "https://images.pexels.com/photos/3912956/pexels-photo-3912956.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Your ultimate fitness companion, designed to help you achieve your health goals with ease and efficiency",
        locate: "https://workout-app-frontend-spn5.onrender.com/"
    },
    {
        id: 2,
        title: "Weather App",
        img: "https://images.pexels.com/photos/5707682/pexels-photo-5707682.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Stay ahead of the weather with an intuitive and accurate weather app.",
        locate: "https://my-weather-project-eb017.web.app/"
    },
    {
        id: 3,
        title: "Recipe App",
        img: "https://images.pexels.com/photos/5845846/pexels-photo-5845846.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Unlock your culinary potential with our recipe app, your go-to source for delicious meals and cooking inspiration",
        locate: "https://rufairecipes.netlify.app/"
    },
    {
        id: 4,
        title: "Restaurant App",
        img: "https://images.pexels.com/photos/1861785/pexels-photo-1861785.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Discover, reserve, and enjoy the best dining experiences with our restaurant app.",
        locate: "https://mylittlelemon.netlify.app/"
    },
    
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ 
        target: ref, 
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.locate}><button>See project</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    ); 
};

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ 
        target: ref, 
        offset:["end end" , "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

  return (
    <div id="portfolio" className="portfolio" ref={ref}>
        
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio