import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({selectedPlayers,setSelectedPlayers , coin, setCoin}) => {

    const handleDelete=(player)=>{

        const filteredPlayer = selectedPlayers.filter(selectedPlayer=>selectedPlayer.name!=player.name);
        setSelectedPlayers(filteredPlayer);
        setCoin(coin+player.price)
    }
    return (
        <div className='flex flex-col gap-4'>
            {   selectedPlayers.length===0?
            <div className='text-center bg-gray-200 rounded-2xl container p-20 mt-10'>
                <h2 className='text-2xl font-bold'>No players Selected.</h2>
                <p className='font-bold'>Go to available Tab to select player</p>
            </div>
            :selectedPlayers.map((player,ind)=>{
                    return <div key={ind} className='flex justify-between p-7 items-center gap-5 rounded-2xl border-2'>
                        <div className='flex gap-3'>
                            <img className='h-20 w-auto rounded-xl' src={player.img} alt="" />
                            <div>
                                <h2 className='flex gap-2 font-bold text-3xl'><FaUser />{player.name}</h2>
                                <p className=' text-xl'> {player.type}</p>
                            </div>
                        </div>
                        <button onClick={()=>handleDelete(player)} className='btn text-2xl text-red-400'><MdDelete /></button>
                    </div>
                })
            }
        </div>
    );
};

export default SelectedPlayers;