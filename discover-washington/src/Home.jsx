import logo from './img/DW_Logo.jpg';
import Gallery from './Carousel';
import React, { useState } from "react";
import Navigation from './Navigation';
import Experience from './Experience';
import Profile from './Profile';
import Modal from './Modal';

function Home(props) {

    const slides = [
        { src: './img/Carousel/pikes-place.jpeg', alt: "Pike Place Farmers Market", exp: "Nestled amongst historic buildings, the fresh food market promotes healthy, local eating and has a history of activism in support of marginalized members of the local community.", wikiUrl: "Pike_Place_Market"},
        { src: './img/Carousel/cape-flattery-washington.jpeg' , alt: "Cape Flattery", exp: "The 1.5 mile roundtrip hike along this part of the Pacific Peninsula known as Cape Flattery is highly accessible, mostly board-walked, and still provides you with a scenic and truly dramatic backdrop. ", wikiUrl: "Cape_Flattery"},
        { src: './img/Carousel/alta-vista-trail.jpeg', alt: "Alta Vista Trail", exp:"The Alta Vista Trail lies in the Paradise area and is 18 miles long. It is snow-free from Mid-July until October and during summer the landscape is full of colorful wildflowers.", wikiUrl: "Mount_Rainier_National_Park"},
        { src: './img/Carousel/dead-mans-cove.jpeg', alt: "Deadman’s Cove", exp: "Deadman’s Cove is an incredibly beautiful state park to visit in the far southwest of the state of Washington. Within the state park also is a historic lighthouse as well as the famous Dedman’s Cove, which has the most spectacular sunset views.", wikiUrl: "Deadman_Island"},
        { src: './img/Carousel/enchantment-basin.jpeg', alt: "Enchantment Basin", exp: "The area is one of the most spectacular locations within the Alpine Lakes Wilderness and in the Cascade Range. To get there is a 7-mile long hike with an elevation gain of 4,400 feet. ", wikiUrl: "The_Enchantments" },
        { src: './img/Carousel/granite-mountain.jpeg' , alt: "Granite Mountain", exp: "Granite Mountain is the place to visit. The hike is approximately 8.5 miles long roundtrip and will have you sweating, but the views are worth it!", wikiUrl: "Granite_Mountain_(King_County,_Washington)" },
        { src: './img/Carousel/la-push-beach.jpeg', alt: "La Push Beach", exp: "La Push, the town on the coast of Washington State, is where you will find not one, but three mile-long beaches!", wikiUrl: "La_Push,_Washington"},
        { src: './img/Carousel/miller-lake-from-jade-lake.jpeg', alt: "Jade Lake", exp: "The turquoise pastel water of Jade lake is stunning! The lake gets its color from rock flour runoff caused by glacier activity, and it is a must-see.", wikiUrl: "Jade_Lake" },
        { src: './img/Carousel/north-cascades-national-park.jpeg' , alt: "North Cascades National Park", exp: "One of Washington’s three national parks, North Cascades provides opportunities for hiking, climbing, skiing, and much more in these gorgeous glacial mountains!", wikiUrl: "North_Cascades_National_Park" },
        { src: './img/Carousel/olympic-wilderness-coast.jpeg', alt: "Olympic Wilderness Coast", exp: "Black bears and sea otters call this place home, but so do many hikers who pass through this section of the Pacific Northwest Trail. Whether you fancy a dip in the ocean, teeming with marine life, or camping out on the sand under the stars, this might just be the coastal hike for you.", wikiUrl: "Olympic_National_Park"},
        { src: './img/Carousel/palouse-falls.jpeg', alt: "Palouse Falls State Park", exp: "The small state park is named for the Palouse Waterfall, which is its focal point. The falls were recently designated Washington’s state waterfall, and it’s easy to see why!", wikiUrl: "Palouse_Falls"},
        { src: './img/Carousel/paradise-mount-rainier.jpeg' , alt: "Paradise - Mount Rainier", exp: "The area is an excellent hub for visiting the rest of Mount Rainier and finding lodging, dining, shopping, and trailheads. During the peak flower season in mid-July, the valley is covered with a rainbow of wildflowers!", wikiUrl: "Paradise,_Washington"},
        { src: './img/Carousel/silver-falls.jpeg', alt: "Silver Falls", exp: "The 3-mile Silver Falls Trail to the plunging Ohanapecosh River at Silver Falls. Though the hike can be beautiful, but strenuous, the views are worth it. Silver Falls has a powerful 97-foot drop into the canyon", wikiUrl: "Silver_Falls" },
        { src: './img/Carousel/sol-duc-falls.jpeg', alt: "Sol Duc Falls Trail", exp: "Hiking trails, lush forests, waterfalls, and hot springs are just a handful of the things to see in the Sol Duc Falls area. The waterfall here is impressive, with perpetual rainbows hovering over the water!", wikiUrl: "Sol_Duc_River"},
        { src: './img/Carousel/Steptoe-Butte-State-Park.jpeg' , alt: "Steptoe Butte State Park", exp: "The Steptoe Butte juts out among the low Palouse hills in this nature preserve. The summit offers those who reach it some phenomenal views of the green Steptoe hills formed by lava flows from millions of years ago.", wikiUrl: "Steptoe_Butte"},
        { src: './img/Carousel/tipsoo-lake.jpeg', alt: "Tipsoo Lake", exp: "Reflected in the waters of Tipsoo Lake is a mirror image of Mount Rainier. With Tipsoo Lake Loop Trail for less than a mile and you’ll see a view of Mount Rainier like no other.", wikiUrl: "Tipsoo_Lake"},
        { src: './img/Carousel/walla-walla-vineyard.jpeg' , alt: "Walla Walla Vineyard", exp: "Walla Walla is known for many things, but wine is at the top of the list. Thanks to its fertile soil, the valley is the location of some 100 vineyards producing delicious wines!", wikiUrl: "Walla_Walla_Valley_AVA" }
      ];

    const [isActive, setActive] = useState("false");

      function mobileMenu(event) {
        setActive(!isActive);
    }

    return (
        <div className="home-page">
            <header aria-label='Navigation Bar' className="header">
                <img className="logo" src={logo} alt="Discover Washington"/>
                <Navigation isActive={isActive} page={props.page} setPage={props.setPage} user={props.user}/>
                <div className={`hamburger ${isActive ? "active" : ""}`} onClick={mobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </header>

            <main aria-label='Content'>
                {props.page === "Home" && 
                    <div>
                        <Profile user={props.user}/>
                        <div className="homepage-main">
                            <section className="content">
                                <header>
                                    <h1 className="home-header">About Discover Washington</h1>
                                </header>
                                <article>
                                    <p>Hey There!</p><br/>
                                    <p>Welcome to our family! Discover Washington is a one-stop site to find places to visit in Washington. We personally handpicked everything to get the real essence of being a Washingtonian. We thrive for your happiness, comfort and satisfaction.</p>
                                    <p>We are delighted to provide you with the best of experience.</p>
                                    <p>We appreciate your love and support.</p><br/>
                                    <p>Yours caringly,</p>
                                    <p>Discover Washington Team</p>
                                </article>
                            </section>
                        </div>
                    </div>
                }
                {props.page === "Gallery" && 
                <div className="carousel-main">
                    <Gallery slides={slides}/>
                </div> }

                {props.page === "Experiences" && 
                <div className="experience-main">
                    <Experience content={slides}/>
                </div> }
            </main>
            
            <footer aria-label='Discover Washington Footer'>
                <p>Content of the page is from</p>
                <a href="www.wikipedia.com">Wikipedia</a>
                <a href="https://www.jasminealley.com/most-beautiful-places-washington/">Jasmine Alley</a>
                <Modal/>
            </footer>
        </div>
    );
}

export default Home;