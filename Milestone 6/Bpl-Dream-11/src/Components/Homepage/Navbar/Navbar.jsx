import React from 'react';

const Navbar = ({coin}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <button className="text-xl font-bold">
                    <span className='text-red-500'>{coin}</span> Coins $$
                </button>
            </div>
        </div>
    );
};

export default Navbar;