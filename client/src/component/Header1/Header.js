import React, { useEffect, useState } from 'react';
import './Header.css';
import { Button } from '..';
import { getLoginUrl } from '../../API';

function Header(props) {

    const [loginUrl, setLoginUrl] = useState(null);

    const handleClick = (e) => {
        if(!loginUrl)
            return;
        window.location.href = loginUrl;
    }

    const getUrl = async () => {
        const { url } = await getLoginUrl();
        setLoginUrl(url);
    }

    useEffect(() => {
        // getUrl();
    }, []);

    return(
        <>
            <div className='header'>
                <h1>
                    Header
                </h1>
                {
                    loginUrl
                    ? <Button text={"Sign in with Google"} onClick={handleClick} />
                    : null
                }
            </div>
        </>
    );
}

export default Header;
