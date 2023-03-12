import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <div>
                <h2>Welcome!</h2>
                <p>This silly, simple little app was created to practice conditional rendering, props and states.</p>
                <p>You are welcome to brows through three of my favorite bands, see some made up ratings I gave their albums and the different colors each level got and play with the scores yourself. Well, actually, the different colors are not so evident in Depeche Mode since they got high scores in most of their albums 🤭. Rating is between 0 (WTF?!?!?!) and 100 (OMG!!!) and it is divided into 5 levels of colors.</p>
                <p>NOTE! This app is very basic and still needs some improvements, like dark-light mode and responsiveness. To be continued...</p>
                <h2>Enjoy (the silence) ❤️</h2>
            </div>
            <img src="https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif" alt="Music gif" />
        </div>
    );
}

export default Home;
