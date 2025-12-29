import { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";


function Hero() {
    const [index, setindex] = useState(0)
    const images = [img1, img2, img3]
    return (
        <div className="hero"
            style={{ backgroundImage: `url(${images[index]})` }}>
            <div className="overlay"></div>
            <div className="content">
                <h1 className="title"> Discover Your Next <span>Adventure</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam saepe explicabo, reprehenderit rerum vero dolores exercitationem voluptatem qui? </p>
                <div className="buttonContainer">
                    <button className="mainBtn">Start Tour</button>
                    <button className="sideBtn">Know More</button>
                </div>
            </div>

            <button className="arrow right"
                onClick={() => {
                    setindex((index + 1) % images.length)
                }}>
                →
            </button>

            <button className="arrow left"
                onClick={() => {
                    setindex((index - 1 + images.length) % images.length)
                }}>
                ←
            </button>
        </div>
    );
}

export default Hero