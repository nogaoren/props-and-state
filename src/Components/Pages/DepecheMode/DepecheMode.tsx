import Album from "../Album/Album";
import "./DepecheMode.css";
import Speak from '../../../Assets/Images/DM_Speak_Spell_1981.png';
import Broken from '../../../Assets/Images/DM_A_Broken_Frame_1982.png';
import Construction from '../../../Assets/Images/DM_Construction_Time_Again_1983.png';
import Some from '../../../Assets/Images/DM_Some_Great_Reward_1984.png';
import Black from '../../../Assets/Images/DM_Black_Celebration_1986.png';
import Music from '../../../Assets/Images/DM_Music_for_the_Masses_1987.png';
import Violator from '../../../Assets/Images/DM_Violator_1990.png';
import Songs from '../../../Assets/Images/DM_Songs_of_Faith_and_Devotion_1993.png';
import Ultra from '../../../Assets/Images/DM_Ultra_1997.png';
import Exciter from '../../../Assets/Images/DM_Exciter_2001.png';
import Playing from '../../../Assets/Images/DM_Playing_the_Angel_2005.png';
import Sounds from '../../../Assets/Images/DM_Sounds_of_the_Universe_2009.png';
import Delta from '../../../Assets/Images/DM_Delta_Machine_2013.png';
import Spirit from '../../../Assets/Images/DM_Spirit_2017.png'
import MementoMori from '../../../Assets/Images/DM_Memento_Mori_2023.png'

function DepecheMode(): JSX.Element {
    return (
        <div className="DepecheMode ArtistAlbums">
			<h2 className="ArtistName">Depehce Mode</h2>
            <div className="Albums">

                <Album name={"Speak and spell"} year={1981} src={Speak} alt={"Speak and Spell's album cover"} title={"Speak and Spell's album cover"} score={78} width="300" height="300"/>

                <Album name={"A broken frame"} year={1982} src={Broken} alt={"A broken frame's album cover"} title={"A broken frame' album cover"} score={85} width="300" height="300"/>

                <Album name={"Construction time again"} year={1983} src={Construction} alt={"Construction time again's album cover"} title={"Construction time again's album cover"} score={93} width="300" height="300"/>

                <Album name={"Some great reward"} year={1984} src={Some} alt={"Some great reward's album cover"} title={"Some great reward's album cover"} score={97} width="300" height="300"/>

                <Album name={"Black celebration"} year={1986} src={Black} alt={"Black celebration's album cover"} title={"Black celebration's album cover"} score={100} width="300" height="300"/>

                <Album name={"Music for the masses"} year={1987} src={Music} alt={"Music for the masses's album cover"} title={"Music for the masses's album cover"} score={91} width="300" height="300"/>

                <Album name={"Violator"} year={1990} src={Violator} alt={"Violator's album cover"} title={"Violator's album cover"} score={100} width="300" height="300"/>

                <Album name={"Songs of faith and devotion"} year={1993} src={Songs} alt={"Songs of faith and devotion's album cover"} title={"Songs of faith and devotion's album cover"} score={100} width="225" height="225"/>

                <Album name={"Ultra"} year={1997} src={Ultra} alt={"Ultra's album cover"} title={"Ultra's album cover"} score={100} width="300" height="300"/>

                <Album name={"Exciter"} year={2001} src={Exciter} alt={"Exciter's album cover"} title={"Exciter's album cover"} score={100} width="300" height="300"/>

                <Album name={"Playing the angel"} year={2005} src={Playing} alt={"Playing the angel's album cover"} title={"Playing the angel's album cover"} score={91} width="300" height="300"/>

                <Album name={"Sounds of the universe"} year={2009} src={Sounds} alt={"Sounds of the universe's album cover"} title={"Sounds of the universe's album cover"} score={80} width="300" height="300"/>

                <Album name={"Delta machine"} year={2013} src={Delta} alt={"Delta machine's album cover"} title={"Delta machine's album cover"} score={75} width="300" height="300"/>

                <Album name={"Spirit"} year={2017} src={Spirit} alt={"Spirit's album cover"} title={"Spirit's album cover"} score={92} width="300" height="300"/>

                <Album name={"Memento mori"} year={2023} src={MementoMori} alt={"Memento Mori's album cover"} title={"Memento Mori's album cover"} width="300" height="300"/>
            </div>
        </div>
    );
}

export default DepecheMode;
