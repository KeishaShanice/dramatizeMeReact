import { useState, useEffect} from 'react';
import Lorem from '../partials/lorem';

function About() {
    const [ page, setPage] = useState({}); //set initial state to empty object
        useEffect(() => {
            fetch('http://localhost:3001/api/pages/2')
            .then(response => response.json()) 
            .then(data => {
                setPage(data); //setPage to data that was just returned
            });
        }, []);

    return (
        <section className="about container">
            <div className="row">
            <h2 className="heading">{page.title}</h2>
            </div>
            
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <img src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1825&q=80" alt="welcome" className="img-thumbnail"/>
                    {/* <img src="https://images.unsplash.com/photo-1565116314774-29a49764a53d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="welcome" classNameName="img-thumbnail" /> */}
                </div>
                <div className="col-sm-12 col-md-6 bodyAbout">
                    <p> {page.body} </p>
                    <p> <Lorem /> </p>  
                    {/* <p> <Lorem /> </p>   */}
                </div>
            </div>
            
        </section>
    );
}

export default About;