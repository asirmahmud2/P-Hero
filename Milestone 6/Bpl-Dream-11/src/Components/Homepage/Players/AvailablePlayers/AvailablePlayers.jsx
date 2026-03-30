import React from 'react';
import Card from '../../../UI/Card';

const AvailablePlayers = ({ players, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                players.map(player => {
                    return <Card key={player.name} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
                })
            }


        </div>
    );
};

export default AvailablePlayers;