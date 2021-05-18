import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



function Home() {
    const [ dramas, setDramas] = useState([]); //set initial state to empty array
        useEffect(() => {
            fetch('http://localhost:3001/api/dramas')
            .then(response => response.json()) 
            .then(data => {
                const dramaData = data.map((drama, index ) => {
                    return (
                        <div key={index} className="col-4 dramaRow">
                            <figure>
                                <img src={`/images/${drama.dramaPic}`} class="img-thumbnail img-fluid" alt={drama.title}/>
                                <figcaption><h2><Link to={`/dramas/${drama.id}`} className="linkTag">{drama.title}</Link></h2></figcaption>
                            </figure>
                            {/* <h2><Link to={`/dramas/${drama.id}`}>{drama.title}</Link></h2> */}
                        </div>
                    );
                });
                setDramas(dramaData); //setDramas to data that was just returned
            });
        }, []);

        const [ page, setPage] = useState({}); //set initial state to empty object
        useEffect(() => {
            fetch('http://localhost:3001/api/pages/1')
            .then(response => response.json()) 
            .then(data => {
                setPage(data); //setPage to data that was just returned
            });
        }, []);


    return (
        <div className="container">
            <div className="row heading">
                <h1>{page.title}</h1>
                <p>{page.body}</p>
            </div>

            <div className="row hero featured">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={process.env.PUBLIC_URL + '/images/ics2.jpg'} className="d-block w-100 img-thumbnail" alt="itaewon class"/>
                        <div className="carousel-caption d-none d-md-block captionFeaturedIC">
                            <h3>Itaewon Class</h3>
                            <p>An ex-con and his friends fight to make their ambitious dreams for their street bar a reality.</p>
                            <Link to="/dramas/8" className="single-link linkTag">More Info</Link>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/images/gs.jpg'} className="d-block w-100 img-thumbnail" alt="goblin"/>
                        <div className="carousel-caption d-none d-md-block captionFeatured">
                            <h3>Goblin</h3>
                            <p>In his quest for a bride to break his immortal curse, Dokkaebi, a 939-year-old guardian of souls, meets a grim reaper and a sprightly student with a tragic past.</p>
                            <Link to="/dramas/4" className="single-link linkTag">More Info</Link>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={process.env.PUBLIC_URL + '/images/mqs2.jpg'} className="d-block w-100 img-thumbnail" alt="mr queen"/>
                        <div className="carousel-caption d-none d-md-block captionFeaturedQueen">
                            <h3>Mr. Queen</h3>
                            <p>When a modern day chef gets trapped in the body of a queen in the Joseon era, chaos ensues.</p>
                            <Link to="/dramas/7" className="single-link linkTag">More Info</Link>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>


            {/* <div className="row hero featured"> <!--Background image of section is drama -->
                <h2>Featured</h2>
                <h3>Name of Featured Drama with rating</h3>
                <p>Episodes</p>
                <p>Synopsis</p>
                <a href="#featured">More Info</a>  <!-- Goes to featured drama page --> 
            </div> */}

            <div className="row">
                    {dramas}
            </div>
        </div>
    );
}

export default Home;

//dramas return an array of objects
//map = loop
//drama = single item returned