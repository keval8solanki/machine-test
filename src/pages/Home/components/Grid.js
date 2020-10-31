import styled from "styled-components"
import axios from 'axios'
import { useEffect, useState } from "react"
import PlayerCard from "./PlayerCard"
import { v4 as uuid } from 'uuid'
import { GridContainer } from "../../../styles"
import { useRecoilValue } from "recoil"
import { playerDataAtom, searchTermAtom } from "../../../recoil/atoms"
import Empty from "./Empty"

function Grid() {
    const [playersData, setPlayersData] = useState([])
    const searchTerm = useRecoilValue(searchTermAtom)

    useEffect(() => {
        axios.get('https://api.jsonbin.io/b/5d0c6e6a860ae0341876aac6/2').then(({ data }) => setPlayersData(data)).catch((e) => console.log(e))
    }, [searchTerm])

    const filteredPlayers = playersData && playersData.filter(player => {
        return player.PFName.toLowerCase().includes(searchTerm.toLowerCase())
    })

    console.log({ filteredPlayers })
    const renderPlayerCards = filteredPlayers && filteredPlayers.map(player => {
        return <PlayerCard key={uuid()} player={player} />
    })


    return renderPlayerCards.length > 0 ? (
        <GridContainer>
            {renderPlayerCards}
        </GridContainer>
    ) : <Empty />
}

export default Grid


