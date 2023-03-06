import React, { useState } from 'react';

function Header(){
    const [header] = useState('Rick and Morty Characters');
    return(
        <h1 className='mb-4' style={{textAlign: 'center'}}>{header}</h1>
    )
}

export default Header;