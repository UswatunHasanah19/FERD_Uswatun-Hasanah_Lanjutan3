import React from 'react';
import {
    Heading,
    Button

} from 'rebass';
import '../App.css';

function Footer() {
    return(
        <div className='footer'>
            <div className='row'>
                <div className='footer-col'>
                    <Heading
                        color='#404eed'
                        width='280px'
                        height='60px'
                    >
                        IMAGINE A PLACE
                    </Heading>
                    <div className='container-flag'>
                        This is flag
                    </div>
                    <div className='social-media'>
                        Twitter
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;