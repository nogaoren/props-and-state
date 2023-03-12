import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import Blink182 from "../../Pages/Blink182/Blink182";
import DepecheMode from "../../Pages/DepecheMode/DepecheMode";
import Home from "../../Pages/Home/Home";
import LinkinPark from "../../Pages/LinkinPark/LinkinPark";
import Page404 from "../../Pages/Page404/Page404";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<App/>}/>
                <Route path="home" element={<Home/>} />
                <Route index element={<Home/>}/>
                <Route path="depecheMode" element={<DepecheMode/>} />
                <Route path="linkinPark" element={<LinkinPark/>} />
                <Route path="blink182" element={<Blink182/>} />
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
