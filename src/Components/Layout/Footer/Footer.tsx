import "./Footer.css";

function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="Footer">
			<p>Rights are <span>NOT</span> reserved {year} &copy;</p>
        </div>
    );
}

export default Footer;
