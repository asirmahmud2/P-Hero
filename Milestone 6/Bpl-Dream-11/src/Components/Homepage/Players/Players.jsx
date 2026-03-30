import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin }) => {
    const players = use(playerPromise);
    const [SelectedType, setSelectedType] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='container mx-auto mt-[60px]'>
            <div className='flex justify-between gap-4 items-center mb-[20px]'>

                {
                    SelectedType === 'available' ?
                        <h2 className='font-bold text-2xl'>Available Players</h2> :
                        <h2 className='font-bold text-2xl'>Selected Player ({selectedPlayers.length}/{players.length})</h2>
                }
                <div className='flex gap-3'>
                    <button onClick={() => setSelectedType('available')}
                        className={`btn ${SelectedType === "available" ? 'btn-primary' : ''}`}>Available</button>
                    <button onClick={() => setSelectedType('selected')}
                        className={`btn ${SelectedType === "selected" ? 'btn-primary' : ''}`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>

            {
                SelectedType === 'available' ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers> : <SelectedPlayers setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></SelectedPlayers>
            }
        </div>
    );
};

export default Players;