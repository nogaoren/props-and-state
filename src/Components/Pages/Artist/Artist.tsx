import "./Artist.css";
interface ArtistProps{
    name: string;
    src: string;
    alt: string;
    title: string;
}

function Artist(prop: ArtistProps): JSX.Element {
    return (
        <div className="Artist Outer Center">
            <h2>{prop.name}</h2>
            <img src={prop.src} alt={prop.alt} title={prop.title} />
        </div>
    );
}

export default Artist;
