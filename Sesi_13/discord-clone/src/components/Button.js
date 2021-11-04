import React from 'react';
import {Button} from 'rebass';

function ButtonHero() {
    return ( 
        <div>
            <Button className='button-195cDm'
                color='#000'
                backgroundColor='#fff'
                marginTop='24px'
                marginRight='24px'
                fontSize='14px'
                padding='16px 32px'
                width='300px'
            >
            Download for Windows
            </Button>
            <Button className='button-195cDm'
                color='#fff'
                backgroundColor='#000'
                marginTop='24px'
                marginRight='24px'
                fontSize='14px'
                padding='16px 32px'
                width='300px'
                
            >
                Open Discord in your browser
            </Button>
        </div>
     );
}

function DownloadHero(){
    return (
        <div>
            <Button className='button-195cDm'
                color='#fff'
                backgroundColor='#5865f2'
                marginTop='24px'
                marginRight='24px'
                fontSize='14px'
                padding='16px 32px'
                width='300px'
            >
            Download for Windows
            </Button>
        </div>
    )
}

export {ButtonHero, DownloadHero};
