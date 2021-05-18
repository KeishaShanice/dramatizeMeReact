import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function DramaSingle() {
    const { id } = useParams(); //Fetch Data from an api with the 'id' from the params
    const [drama, setDrama] = useState({
        dramaPic:'',
        title:'',
        synopsis:'',
        number_of_episodes:'',
        primary_genre_id: '',
        imdb_rating:''
    });

    useEffect(() => {
        fetch(`http://localhost:3001/api/dramas/${id}/`)
            .then(response => response.json())
            .then(drama => {
                setDrama(drama);
            });
    }, [id]);

    return(
        <div className="container">

            <div className="row">
                <div className="col">
                    <h1 className="heading">{drama.title}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col singleListCol">
                    <ul className="singleList">
                        <li ><img src={`/images/${drama.dramaPic}`} alt={drama.title} className="img-thumbnail"/></li>
                        <li>Synopsis: <span className="singleSynopsis">{drama.synopsis}</span> </li>
                        <li>Episodes: <span className="singleSynopsis">{drama.number_of_episodes}</span> </li>
                        <li>Primary Genre: <span className="singleSynopsis">{drama.primary_genre_id}</span></li>
                        <li>imdb Rating: <span className="singleSynopsis">{drama.imdb_rating}</span></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default DramaSingle;