import React from 'react';

const Logo = () => {
    return (
        <> 
            <h1>
            {/* <img src="https://via.placeholder.com/100x100" alt="placeholder" /> */}
            <img src={process.env.PUBLIC_URL + '/images/dmc2.png'}  className="img-fluid"/>
            {/* [Dramatize Me] */}
            </h1>
        </> 
    )
}

export default Logo;