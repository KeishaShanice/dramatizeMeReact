import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Genre() {
    const [ page, setPage] = useState({}); //set initial state to empty object
        useEffect(() => {
            fetch('http://localhost:3001/api/pages/3')
            .then(response => response.json()) 
            .then(data => {
                setPage(data); //setPage to data that was just returned
            });
        }, []);

    // const [ dramas, setDramas] = useState({}); 
    // useEffect(() => {
    //     fetch('http://localhost:3001/api/dramas')
    //     .then(response => response.json()) 
    //     .then(data => {
    //         setDramas(data); 
    //     });


    return (
            <section class="genre">
                
                <div className="container">
                    <div class="row heading">
                        <h2>{page.title}</h2>
                        <p>{page.body}</p>
                    </div>

                    <div className="romance genreRow">
                        <div className="row">
                            <h3>Romance</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <figure>
                                <Link to="/dramas/1" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/twom.jpeg'} class="d-block w-100 img-thumbnail" alt="world of married"/>
                                    <figcaption>The World of the Married</figcaption>
                                </Link>
                                </figure>
                            </div>
                            <div className="col">
                                <figure>
                                <Link to="/dramas/3" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/cloy.png'} class="d-block w-100 img-thumbnail" alt="crash landing"/>
                                    <figcaption>Crash Landing on You</figcaption>
                                </Link>
                                </figure>
                            </div>
                            <div className="col">
                                <figure>
                                <Link to="/dramas/4" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/goblin.jpeg'} class="d-block w-100 img-thumbnail" alt="goblin"/>
                                    <figcaption>
                                        Goblin
                                    </figcaption>
                                </Link>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="comedy genreRow">
                        <div className="row">
                            <h3>Comedy</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <figure>
                                <Link to="/dramas/5" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/reply.jpeg'} class="d-block w-100 img-thumbnail" alt="reply"/>
                                    <figcaption>Reply 1988</figcaption>
                                </Link>
                                </figure>
                            </div>
                            <div className="col">
                                <figure>
                                <Link to="/dramas/7" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/mq.jpeg'} class="d-block w-100 img-thumbnail" alt="mr queen"/>
                                    <figcaption>Mr. Queen</figcaption>
                                </Link>
                                </figure>
                            </div>
                            <div className="col">
                                <figure>
                                <Link to="/dramas/10" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/hmp.jpeg'} class="d-block w-100 img-thumbnail" alt="my prince"/>
                                    <figcaption>One Hundred Days My Prince</figcaption>
                                </Link>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div className="drama genreRow">
                        <div className="row">
                            <h3>Drama</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <figure>
                                <Link to="/dramas/2" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/skyCastle.jpeg'} class="d-block w-100 img-thumbnail" alt="sky castle"/>
                                    <figcaption>Sky Castle</figcaption>
                                </Link>
                                </figure>
                            </div>
                            <div className="col">
                                <figure>
                                <Link to="/dramas/6" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/ms.jpeg'} class="d-block w-100 img-thumbnail" alt="mr sunshine"/>
                                    <figcaption>Mr. Sunshine</figcaption>
                                </Link>
                                </figure>
                            </div>
                            <div className="col">
                                <figure>
                                <Link to="/dramas/8" className="single-link linkTag">
                                    <img src={process.env.PUBLIC_URL + '/images/ic.jpg'} class="d-block w-100 img-thumbnail" alt="itaewon class"/>
                                    <figcaption>Itaewon Class</figcaption>
                                </Link>
                                </figure>
                            </div>
                        </div>
                    </div>

                    {/* <div className="family genreRow">
                        <div className="row">
                            <h3>Slice of Life</h3>
                        </div>
                        <div className="row">
                            <div className="col">
                                <figure>
                                <img src={process.env.PUBLIC_URL + '/images/hp.jpeg'} class="d-block w-100 img-thumbnail" alt="hospital playlist"/>
                                <figcaption>Hospital Playlist</figcaption>
                                </figure>
                            </div>
                            <div className="col">
                            <figure>
                                <img src={process.env.PUBLIC_URL + '/images/reply.jpeg'} class="d-block w-100 img-thumbnail" alt="reply"/>
                                <figcaption>Reply 1988</figcaption>
                                </figure>
                            </div>
                            <div className="col">
                                <figure>
                                <img src="https://cdn1.clickthecity.com/images/tv/poster/600/201.jpg" class="d-block w-100 img-thumbnail" alt="prison playbook" />
                                <figcaption>Prison Playbook</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div> */}
                </div> 
            </section>
    );
}

export default Genre;