import React from 'react';
import "./Menu.scss";
import App from './App';
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CgShoppingBag } from 'react-icons/cg';

function Menu() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className='menu'>
            <button onClick={() => setOpen(true)} className="icons" >

            <div className="icons">
            <IoIosSearch />
            <CiHeart />

            <CgShoppingBag />

          </div>
            </button>
            {open && (
                <div className='overlay'>
                    <div className='modal'>
                        <svg onClick={() => setOpen(false)} height="600px" width="400px" />
                    </div>
                </div>

            )

            }

        </div>

    )
}