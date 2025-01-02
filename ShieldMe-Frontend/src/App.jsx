import {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './App.css'
import {TeamCard} from "./components/TeamCard.jsx";
import dashboard from "/Dashboard.svg";
import contactImage from "/Emergencycircle.svg"
import logo from "/Logo.svg"
import ShlokBanner from "./components/ShlokBanner.jsx";
import {UserContext} from "./ContextAPI/UserContext.jsx";

function App() {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/dashboard');
        }
    }, [navigate, user]);

    return (
        <>
            <section className={"home-container"}>

                <div id="home-hero-container">
                    <div className={"left-home-hero-container"}>
                        <img src={logo} alt={"Logo Image"}/>

                        <h1>ShieldMe</h1>
                        <p>“ Feel Safe, Anywhere, Anytime <span className={""}>“</span></p>
                        <div>
                            <Link className="button" to={"/register"}>Register</Link>
                        </div>

                    </div>

                    <div className={"right-home-hero-container"}>
                        <img src={dashboard} alt={"UserDashboard Page Image"}/>
                        <img src={contactImage} alt={"Contact Page Image"}/>
                    </div>
                </div>

                <div className={"line-div"}>
                    <div></div>
                </div>
                <ShlokBanner/>
                <div className={"line-div"}>
                    <div></div>
                </div>
            </section>

            <section className="services-container" id="services">
                <div className="services-content">
                    <h2>Our services</h2>
                    <p>We provide to you the best things for you</p>
                    <div className="service-cards">

                        <div className="service-card1">
                            <img src="sos.jpg" alt="SOS Alert" width="250" height="250"/>
                            <h3>SOS Alert</h3>
                            <p>An emergency feature to instantly notify your registered contacts via email or phone in
                                critical situations.</p>
                        </div>

                        <div className="service-card2">
                            <img src="journalnew.png" alt="Journalling" width="300" height="250"
                                 className='journalimg'/>
                            <h3>Journalling</h3>
                            <p>A secure space to document your daily thoughts and feelings for self-reflection.</p>
                        </div>

                        <div className="service-card3">
                            <img src="mental.jpg" alt="Positive Affirmations" width="230" height="250"/>
                            <h3>Positive Affirmations</h3>
                            <p>A collection of motivational quotes to inspire positivity and boost your mental
                                well-being every day.</p>
                        </div>

                    </div>
                </div>
            </section>

            <div className={"line-div"}>
                <div></div>
            </div>

            <section className={"team-container"}>
                <h1>Our Team</h1>
                <TeamCard/>
            </section>


        </>
    )
}

export default App
