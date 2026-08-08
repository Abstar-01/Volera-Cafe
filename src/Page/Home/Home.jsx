import React from "react";
import "./Home.css"


// Importing Images 
import Frapachino from '../Images/Frapachino.png'
import Back from '../Icons/Back.png';
import Forward from '../Icons/Forward.png';
import MiniMenuBackground from '../Images/background3.png';
import logoCover from "../Icons/Logo-.png";
import LocalImg from "../Images/Map.jpg"

function Home() {

    return (
        <>
            <section className="HomePageContainer">
                <section className="PromotionPanels">
                    <div className="PromoBlock1">
                        <h1 className="Title1">WHERE EVER CUP TELLS A STORY.</h1>
                        <h1 className="Title2">WHAT'S <strong className="GreenTitle">YOURS?</strong></h1>
                        <h3 className="Title3">FRAPUCCINO COFFEE DELIGHT</h3>
                        <p className="description">
                            Indulge in the perfect blend of coffee and ice
                            – the Frappuccino is your cool coffee escape.
                            Elevate your coffee moment with a creamy, icy
                            Frappuccino delight.
                        </p>
                        <p className="BRlabel">BEST RATTING <b style={{ color: '#016541', fontSize: '45px', marginLeft: '25px' }}>$8.6</b></p>
                        <button className="AddToCart">ADD TO CART</button>
                        <div className="DisplayBar">
                            <div className="GreenCover"></div>
                            <div className="WhiteCover"></div>
                            <img src={Frapachino} alt="" width={"90px"} className="Drink1" />
                            <img src={Frapachino} alt="" width={"90px"} className="Drink2" />
                            <img src={Frapachino} alt="" width={"90px"} className="Drink3" />
                        </div>
                    </div>
                    <div className="PromoBlock2">
                        <img src={Frapachino} alt="" width={'65%'} />
                        <h1 className="CUPTitle1">FRAPUCCINO</h1>
                        <h1 className="CUPTitle2">FRAPUCCINO</h1>
                    </div>
                </section>


                <section className="minimenu">
                    <nav className="navMiniMenu">
                        <button>DRINKS</button>
                        <button>FOOD</button>
                        <button>AT HOME</button>
                        <button>MERCHANDISE</button>
                    </nav>
                    <div className="displayMiniMenu">
                        <div className="arrow1">
                            <img src={Back} alt="" width={"60%"} />
                        </div>
                        <div className="block1 block">
                            <img src={MiniMenuBackground} alt="" width={'18%'} className="backgroundPattern" />
                            <img src={Frapachino} alt="" width={"150px"} className="MinMenuDrink" />
                            <h1>CARAMEL LATTE</h1>
                            <form action="" className="OrderSpecs">
                                <MiniMenuOrderSpec />
                            </form>
                            <button>ADD TO CART</button>
                        </div>
                        <div className="block2 block">
                            <img src={MiniMenuBackground} alt="" width={'18%'} className="backgroundPattern" />
                            <img src={Frapachino} alt="" width={"150px"} className="MinMenuDrink" />
                            <h1>CARAMEL LATTE</h1>
                            <form action="" className="OrderSpecs">
                                <MiniMenuOrderSpec />
                            </form>
                            <button>ADD TO CART</button>
                        </div>
                        <div className="block3 block">
                            <img src={MiniMenuBackground} alt="" width={'18%'} className="backgroundPattern" />
                            <img src={Frapachino} alt="" width={"150px"} className="MinMenuDrink" />
                            <h1>CARAMEL LATTE</h1>
                            <form action="" className="OrderSpecs">
                                <MiniMenuOrderSpec />
                            </form>
                            <button>ADD TO CART</button>
                        </div>
                        <div className="block4 block">
                            <img src={MiniMenuBackground} alt="" width={'18%'} className="backgroundPattern" />
                            <img src={Frapachino} alt="" width={"150px"} className="MinMenuDrink" />
                            <h1>CARAMEL LATTE</h1>
                            <form action="" className="OrderSpecs">
                                <MiniMenuOrderSpec />
                            </form>
                            <button>ADD TO CART</button>
                        </div>
                        <div className="arrow2">
                            <img src={Forward} alt="" width={"60%"} />
                        </div>
                    </div>
                </section>

                {/* An infomrational Panel About the Store */}
                <section className="StoreInfoPanel">
                    <form action="">
                        <fieldset>
                            <div>
                                <h1>WELCOME TO VOLERA</h1>
                                <p>
                                    Volera is your everyday escape, a warm and welcoming space
                                    where every drink is made with care, character, and purpose. We
                                    blend premium, ethically sourced beans using a range of brewing
                                    methods—including espresso, cold brew, pour-over, and French
                                    press—to bring out the fullest, richest flavors in every cup. Our
                                    commitment to sustainability shines through in our eco-friendly
                                    packaging and waste-conscious practices, ensuring that each sip
                                    supports both your comfort and the planet.
                                </p>
                                <h2>STORE HOURS</h2>
                                <p>
                                    <b>Monday – Friday:</b> 7:00 AM – 10:00 PM <br />
                                    <b>Saturday – Sunday:</b> 8:00 AM – 12:00 AM
                                </p>
                            </div>
                            <div>
                                <img src={logoCover} alt="" width={'400px'} />
                            </div>
                        </fieldset>
                    </form>
                    <h1>OUR BRANCHES</h1>
                    <section className="BranchLocation">
                        <div>
                            <img src={LocalImg} alt="" width={"40%"}/>
                            <div>
                                <h2>Location 1</h2>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <img src={LocalImg} alt="" width={"40%"}/>
                            <div>
                                <h2>Location 2</h2>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <img src={LocalImg} alt="" width={"40%"}/>
                            <div>
                                <h2>Location 3</h2>
                                <p></p>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="WallOfLogo">
                    <h1>VOLERA</h1>
                    <h1>VOLERA</h1>
                    <h1>VOLERA</h1>
                    <h1>VOLERA</h1>
                </section>

                {}
                <section className="Feedback">
                    <form action="">
                        <fieldset>
                            <section className="CustomerFeedbackInformation">
                                <h1>Feedback</h1>
                                <label htmlFor="">Name</label> <br />
                                <input type="text" /> <br />
                                <label htmlFor="">Email</label> <br />
                                <input type="email" />
                            </section>
                            <section className="FeedbackContent">
                                <textarea name="" id="" placeholder="Give us you toughts"></textarea>
                            </section>
                        </fieldset>    
                    </form>        
                </section>

                <footer className="HomePageFooter">
                    <div>
                        <h1>Sign Your Way To Wellness - One Cup At A Time.</h1>
                        <div>
                            <h2>Get in Touch</h2>
                            <form action="">
                                <fieldset>
                                    <input type="text" placeholder="Enter your Email"/>
                                    <button>Subscribe</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div>
                        <table>
                            <tbody>
                                <tr>

                                </tr>
                                <tr>

                                </tr>
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </footer>

            </section>
        </>
    );
}

export default Home;

function MiniMenuOrderSpec() {
    return (
        <table className="MiniMenuOrder">
            <tbody>
                <tr>
                    <td className="MilkOrderTitle">
                        <label htmlFor="">MILK</label>
                    </td>
                    <td>
                        <select name="" id="" className="">
                            <option value="" default hidden>OPTION</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">CREAM</label>
                    </td>
                    <td>
                        <select name="" id="" className="">
                            <option value="" default hidden>OPTION</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="">TOPPINGS</label>
                    </td>
                    <td>
                        <select name="" id="" className="">
                            <option value="" default hidden>OPTION</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}