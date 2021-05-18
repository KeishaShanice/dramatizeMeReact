import { useState, useEffect } from 'react';


function Actors() {
    const [ actors, setActors] = useState([]); //set initial state to empty array
    useEffect(() => {
        fetch('http://localhost:3001/api/actor_table')
        .then(response => response.json()) 
        .then(data => {
            const actorData = data.map((actor, index ) => {
                return (
                    <div key={index} className="col-sm-12 col-md-4">
                        <a href="#">{actor.actor}</a> 
                        <p>Latest Drama: Title</p>
                    </div>
                );
            });
            setActors(actorData); //setDramas to data that was just returned
        });
    }, []);

    const [ page, setPage] = useState({}); //set initial state to empty object
        useEffect(() => {
            fetch('http://localhost:3001/api/pages/4')
            .then(response => response.json()) 
            .then(data => {
                setPage(data); //setPage to data that was just returned
            });
        }, []);



    return (
        <>
        <div className="container">
            <div className="row heading">
                <h2>{page.title}</h2>
                <p>{page.body}</p>
            </div>
            <div className="row actorRow">
                {actors}
            </div>
        </div>
        </>
    );
}

export default Actors;