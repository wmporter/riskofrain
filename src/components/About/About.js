import NavBar from '../NavBar.js';
import logo from '../logo.png';
import './About.css';

function About() {
    return (
        <div className="about tc">
            <img className='logo' src={logo} alt='Risk of Rain 2' /><br />
            <NavBar />
            <h1>About</h1><br/>
            <div className='paragraphing'>
            <a className='extraInfo' href='#/'>Disclaimer: 'Synergises with' is subject to change and most inputs are placeholders until the community send their ideas in. In cases where I've put
                'Synergises with:' + a note of some kind that isn't strictly a synergy; those notes are simply information placeholders so please take everything with
                a pinch of salt.</a><br />
            <p className="text">
                Risk of Rain 2 Item Index is a fan-made responsive website used to look at the items within the game and see how they synergise with eachother.
                This is a passion project for me and I was excited to combine two things I love; web development and gaming into a tool that the Risk of Rain
                community could use. Whenever I was playing Risk of Rain 2, I often found myself having to pause the game and google what certain items did
                to find out if they were worth keeping or even picking up in the first place. I found that after introducing many of my friends to the game,
                I was always enjoying it much more than everyone else as I had put in time and effort into working out which items worked well with which 
                survivors and many of my friends were often disheartened by the chaos and lack of guidance. </p>

                <p className="text">
                    The previously mentioned issues me and my friends found are what gave me the idea for the Risk of Rain 2 Item Index tool, in an attempt to
                    attract and retain a new playerbase, and hopefully re-ignite a love for the game from the old player base. The data I have gathered for this
                    site so far is from the Wiki page (item descriptions) and as I am a relatively new player myself (115 hours) I am going to be relying heavily
                    on community input. If you see any mistakes, have more input about the current dataset displayed or have any more ideas/requests for the site;
                    please head over to the 'Contact Us' page and send me a message outlining your visions.
                    <br />
                    Thanks - Muz
                </p>
            </div>
        </div>
    )
}

export default About;