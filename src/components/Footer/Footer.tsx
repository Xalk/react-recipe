import React from "react";
import logoFooter from "../../assets/textLogo.svg";
import cooked from "../../assets/Cooked_Logo.png";
import fb from "../../assets/facebook-brands.svg";
import ig from "../../assets/instagram-brands.svg";
import tw from "../../assets/twitter-brands.svg";
import yt from "../../assets/youtube-brands.svg";

interface FooterProps {

}


const Footer: React.FC<FooterProps> = () => {
    return (
        <div className="footer">
            <div className="infoBlock">
                <div className="premium">
                    <img src={logoFooter} alt="logo-footer"/>
                    <p>
                        Basil is a premium recipe theme for WordPress that works alongside the Cooked Pro plugin
                        (included). Basil adds custom features like a recipe slider, homepage widgets and more.
                        Start building your community today!
                    </p>
                    <button className="greenBtn">Purchase Basil</button>
                </div>
                <div className="recent">
                    <img src={cooked} alt="recent"/>
                    <p>
                        Basil is a premium recipe theme for WordPress that works alongside the Cooked Pro plugin
                        (included). Basil adds custom features like a recipe slider, homepage widgets and more.
                        Start building your community today!
                    </p>
                    <button className="greenBtn">Purchase Basil</button>
                </div>
                <div className="plugin">
                    <img src={cooked} alt="logo-cooked"/>
                    <p>
                        Cooked Pro is the powerful recipe plugin that's included with the Basil theme. It handles
                        all of your recipes! You can create and share recipes, let users create profiles and submit
                        recipes and so much more.
                    </p>
                    <button className="greenBtn">Learn More</button>
                </div>

            </div>
            <div className="bottomFooter">
                <p>Copyright ©2022 Xalk</p>
                <div className="social">
                    <img src={fb} alt="fb"/>
                    <img src={ig} alt="ig"/>
                    <img src={tw} alt="tw"/>
                    <img src={yt} alt="yt"/>
                </div>
            </div>

        </div>
    );
}

export default Footer;