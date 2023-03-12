import "./Blink182.css";
import Album from "../Album/Album";
import Cat from '../../../Assets/Images/Blink-182_Cheshire_Cat_1995.jpg';
import Dude from '../../../Assets/Images/Blink-182_Dude_Ranch_1997.jpg';
import Enema from '../../../Assets/Images/Blink-182_Enema_of_the_State_1999.jpg';
import Take from '../../../Assets/Images/Blink-182_Take_Off_Your_Pants_and_Jacket_2001.jpg';
import Blink from '../../../Assets/Images/Blink-182_Blink-182_2003.jpg';
import Neighborhoods from '../../../Assets/Images/Blink-182_Neighborhoods_2011.jpg';
import California from '../../../Assets/Images/Blink-182_California_2016.jpg';
import Nine from '../../../Assets/Images/Blink-182_Nine_2019.png';

function Blink182(): JSX.Element {
    return (
        <div className="Blink182 ArtistAlbums">
			<h2 className="ArtistName">Blink 182</h2>
            <div className="Albums">

            <Album name={"Cheshire cat"} year={1995} src={Cat} alt={"Cheshire cat's album cover"} title={"Cheshire cat's album cover"} score={19} width="316" height="316"/>

            <Album name={"Dude ranch"} year={1997} src={Dude} alt={"Dude ranch's album cover"} title={"Dude ranch's album cover"} score={39} width="316" height="316"/>

            <Album name={"Enema of the state"} year={1999} src={Enema} alt={"Enema of the state's album cover"} title={"Enema of the state's album cover"} score={59} width="316" height="316"/>

            <Album name={"Take off your pants and jacket"} year={2001} src={Take} alt={"Take off your pants and jacket's album cover"} title={"Take off your pants and jacket's album cover"} score={79} width="316" height="316"/>

            <Album name={"Blink 182"} year={2003} src={Blink} alt={"Blink 182's album cover"} title={"Blink 182's album cover"} score={98} width="316" height="316"/>

            <Album name={"Neighborhoods"} year={2011} src={Neighborhoods} alt={"Neighborhoods's album cover"} title={"Neighborhoods's album cover"} score={71} width="316" height="316"/>

            <Album name={"California"} year={2016} src={California} alt={"California's album cover"} title={"California's album cover"} score={100} width="316" height="316"/>

            <Album name={"Nine"} year={2019} src={Nine} alt={"Nine's album cover"} title={"Nine's album cover"} score={1} width="300" height="300"/>

            </div>
        </div>
    );
}

export default Blink182;
