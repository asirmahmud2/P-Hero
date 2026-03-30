import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ player, setCoin, coin , setSelectedPlayers, selectedPlayers}) => {

    const [isSelected, setIsSelected] = useState(false);
    const handelSelectButton = () => {
        const newPrice = coin - player.price;
        if (newPrice >= 0) {
            setCoin(coin - player.price);
        }
        else{
            toast.error("Not Enough Coin")
            return;
        }
        toast.success(`${player.name} is selected`);
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player])
    }
    return (
        <div className="card bg-base-100 shadow-xl rounded-3xl hover:shadow-4xl">
            <figure>
                <img
                    src={player.img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><FaUser />{player.name}</h2>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <FaFlag />
                        <p>{player.country}</p>
                    </div>
                    <button className='btn'>{player.type}</button>
                </div>
                <div className="divider"></div>

                <h2 className='font-bold'>{player.rating}</h2>
                <div className='flex justify-between'>
                    <p className='font-bold'>{player.battingStyle}</p>
                    <p className='font-bold text-right'>{player.bowlingStyle}</p>
                </div>

                <div className="card-actions justify-end items-center">
                    <p className='font-bold'>{player.price}</p>
                    <button onClick={handelSelectButton} className="btn" disabled={isSelected}>{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div >
    );
};

export default Card;