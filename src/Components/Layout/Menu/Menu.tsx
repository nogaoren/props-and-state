import { Link } from "react-router-dom";
import DM from '../../../Assets/Images/DM.jpg'
import LP from '../../../Assets/Images/LP.jpg'
import BL from '../../../Assets/Images/BL.jpg'
import "./Menu.css";
import Artist from "../../Pages/Artist/Artist";
import { ImHome } from "react-icons/im";

function Menu(): JSX.Element {

    return (
        <div className="Menu Center">
			<Link to='home'><ImHome className='home'/></Link>
            <Link to='depecheMode'><Artist name={"Depeche Mode"} src={DM} alt={"Depeche Mode"} title={"Depeche Mode"}/></Link>
            <Link to='linkinPark'><Artist name={"Linkin Park"} src={LP} alt={"Linkin Park"} title={"Linkin Park"}/></Link>
            <Link to='blink182'><Artist name={"Blink 182"} src={BL} alt={"Blink 182"} title={"Blink 182"}/></Link>
        </div>
    );
}

export default Menu;
