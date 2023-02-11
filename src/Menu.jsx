import React from 'react';
import "./Menu.scss";
import App from './App';

import { CgShoppingBag } from 'react-icons/cg';

function Menu(){
    const[open, setOpen] = React.useState(true);
 return(
<div className='menu'>

<button className='slider'>

    <img src={CgShoppingBag} alt="" className='dsds'/>
<div className='slipper'>


<svg onClick={() => setOpen(false)} height="600px" width="400px"/>

</div>


</button>

</div>




 )
}