import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navigationData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Projects", path: "/projects" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const links = navigationData.map((route) => <li key={route.id} className='mr-10'><a href={route.path}>{route.name}</a> </li>)

    return (
        <nav className='flex justify-between mx-10'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-500
                    ${open? 'top-8':'-top-40'}
                    `}>
                    {
                        links
                    }
                </ul>
                <h1>My Navbar</h1>
            </span>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;