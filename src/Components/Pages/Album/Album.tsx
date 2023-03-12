import { useState } from "react";
import "./Album.css";
interface AlbumProps{
    name: string;
    year: number;
    src: string; 
    alt: string; 
    title: string;
    score?: number;
    width?: string;
    height?: string;
}

function Album(prop: AlbumProps): JSX.Element {
    // Defining state
    const[score, setScore] = useState<number>(prop.score || 0);
    // Function for adding a point to the score
    const AddScore = () => {
        if (score === 100){
            return;
        }
        setScore(score => score + 1);
    }
    // Function for subtracting a point from the score
    const RemoveScore = () => {
        if (score === 0){
            return;
        }
        setScore(score => score - 1);
    }
    // Determining the color of the score
    const scoreColor = (score > 80) ? 'excellent' : 
                        (score > 60) ? 'good' : 
                        (score > 40) ? 'mediocre' : 
                        (score > 20) ? 'bad' : 'shit';

    
    return (
        <div className="Album">
			<div className='Outer Center'>
                <h3>{prop.name}</h3>
                <p>{prop.year}</p>
                <img src={prop.src} alt={prop.alt} title={prop.title}/>
                <div className="Inner Center">
                    {(prop.score && score !== 0) && <button onClick={RemoveScore}>-</button>}
                    {(prop.score) ? <span className={scoreColor}>{score}</span> : <span>TBA</span>}
                    {(prop.score && score !== 100) && <button onClick={AddScore}>+</button>}
                </div>
            </div>
        </div>
    );
}

export default Album;
