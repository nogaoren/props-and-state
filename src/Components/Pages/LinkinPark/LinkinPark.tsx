import Album from "../Album/Album";
import "./LinkinPark.css";
import Hybrid from '../../../Assets/Images/Linkin_Park_Hybrid_Theory_2000.jpg';
import Meteora from '../../../Assets/Images/Linkin_Park_Meteora_2003.jpg';
import Minutes from '../../../Assets/Images/Linkin_Park_Minutes_to_Midnight_2007.jpg';
import Thousand from '../../../Assets/Images/Linkin_Park_A_Thousand_Suns_2010.jpg';
import Living from '../../../Assets/Images/Linkin_Park_Living_Things_2012.jpg';
import Hunting from '../../../Assets/Images/Linkin_Park_The_Hunting_Party_2014.jpg';
import One from '../../../Assets/Images/Linkin_Park_One_More_Light_2017.jpeg';


function LinkinPark(): JSX.Element {
    return (
        <div className="LinkinPark ArtistAlbums">
			<h2 className="ArtistName">Linkin Park</h2>
            <div className="Albums">

                <Album name={"Hybrid theory"} year={2000} src={Hybrid} alt={"Hybrid theory's album cover"} title={"Hybrid theory's album cover"} score={100} width="316" height="316"/>

                <Album name={"Meteora"} year={2003} src={Meteora} alt={"Meteora's album cover"} title={"Meteora's album cover"} score={90} width="316" height="316"/>
                
                <Album name={"Minutes to midnight"} year={2007} src={Minutes} alt={"Minutes to midnight's album cover"} title={"Minutes to midnight's album cover"} score={80} width="300" height="300"/>

                <Album name={"A thousand suns"} year={2010} src={Thousand} alt={"A thousand suns's album cover"} title={"A thousand suns's album cover"} score={60} width="300" height="300"/>

                <Album name={"Living things"} year={2012} src={Living} alt={"The hunting party's album cover"} title={"The hunting party's album cover"} score={40} width="300" height="300"/>

                <Album name={"The hunting party"} year={2014} src={Hunting} alt={"The hunting party's album cover"} title={"The hunting party's album cover"} score={20} width="300" height="300"/>
                
                <Album name={"One more light"} year={2017} src={One} alt={"One more light's album cover"} title={"One more light's album cover"} score={98} width="316" height="316"/>

            </div>
        </div>
    );
}

export default LinkinPark;
