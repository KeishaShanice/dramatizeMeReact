import React, { useState, useEffect } from 'react';



function Contact() {
    const [ page, setPage] = useState({}); //set initial state to empty object
        useEffect(() => {
            fetch('http://localhost:3001/api/pages/5')
            .then(response => response.json()) 
            .then(data => {
                setPage(data); //setPage to data that was just returned
            });
        }, []);


    const [ inputs, setInputs ] = useState({
        first_name:"",
        last_name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/contact/create', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            setInputs({ //reset to blank
                first_name:"",
                last_name: "",
                email: "",
                message: ""
            })
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setInputs(prevState => {
            return {...prevState, [name]: value};
        });
    }


    return (
        <section className="contact container">
            <div className="row">
                <div className="col">
                    <h2>{page.title}</h2>
                    <p>{page.body}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 formCol">
                    <form onSubmit={handleSubmit} name="sentMessage" id="contactForm" noValidate>

                        <div className="mb-3">
                            <label for="firstName" className="form-label">First Name
                                <input name="first_name" type="text" className="form-control" id="firstName" required data-validation-required-message="Please enter your first name." placeholder="First Name" onChange={handleChange}/>
                            </label>
                        </div>

                        <div className="mb-3">
                            <label for="lastName" className="form-label">Last Name
                                <input name="last_name" type="text" className="form-control" id="lastName" required data-validation-required-message="Please enter your last name." placeholder="Last Name" onChange={handleChange}/>
                            </label>
                        </div>

                        <div className="mb-3">
                            <label for="emailAddress" className="form-label">Email address
                                <input name="email" type="email" className="form-control" id="emailAddress" placeholder="name@example.com" onChange={handleChange}/>
                            </label>
                        </div>
                        <div className="mb-3">
                            <label for="message" className="form-label">Enter Your Message
                                <textarea name="message" className="form-control" id="message" rows="3" onChange={handleChange}required data-validation-required-message="Please enter message."></textarea>
                            </label>
                        </div>

                        <div className="mb-3">
                            <label for="submit" className="form-label">
                                <input name="submit" type="submit" className="submitButton" id="submit" required data-validation-required-message="Please submit." placeholder="Submit" />
                            </label>
                        </div>

                    </form>
                </div>
            
                <div className="col-sm-12 col-md-6 d-none d-md-block">
                {/* <img src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="contact" className="img-thumbnail"/> */}

                <img src="https://images.unsplash.com/photo-1524496686051-f9b8e8cf9d1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="contact" className="img-thumbnail" />

                {/* <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="contact" className="img-thumbnail" /> */}

                </div>
            </div>

        </section>
    );
}

export default Contact;