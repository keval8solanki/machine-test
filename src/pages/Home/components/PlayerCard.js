import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { noSpace } from '../../../styles';

function PlayerCard({ player }) {
    const { Id, PFName, SkillDesc, Value, UpComingMatchesList } = player
    const [image, setImage] = useState()
    import(`../../../assets/images/players/${Id}.jpg`).then(img => setImage(img)).catch(e => console.log(e))

    const decimal = (num) => {
        if (num < 10) return `0${num}`
        return num
    }

    const UTCtoLocal = (UTC) => {
        if (UTC) {
            const locateDate = new Date(UTC).toLocaleString()
            const [date, time] = locateDate.split(',')
            const [mm, dd, yyyy] = date.split('/')
            const formatedDate = `${decimal(dd)}-${decimal(mm)}-${yyyy}`
            const formatedTime = time.toLowerCase()
            return `${formatedDate} ${formatedTime}`
        }


    }

    return (
        <PlayerCardContainer>
            {image && <PlayerImage src={image.default} alt={PFName} />}

            <PlayerDataContainer>
                <Label>Name:</Label>
                <PlayerData>{PFName}</PlayerData>
            </PlayerDataContainer>

            <PlayerDataContainer>
                <Label>Skill:</Label>
                <PlayerData>{SkillDesc}</PlayerData>
            </PlayerDataContainer>

            <PlayerDataContainer>
                <Label>Value:</Label>
                <PlayerData>{Value}</PlayerData>
            </PlayerDataContainer>

            <PlayerDataContainer>
                <Label>Upcoming Match:</Label>
                <PlayerData>{UpComingMatchesList[0].CCode} vs {UpComingMatchesList[0].VsCCode}</PlayerData>
            </PlayerDataContainer>

            <PlayerDataContainer>
                <Label>Next Match Time:</Label>
                <PlayerData>{UTCtoLocal(UpComingMatchesList[0].MDate)}</PlayerData>
            </PlayerDataContainer>

        </PlayerCardContainer>
    )
}

export default PlayerCard

const PlayerCardContainer = styled.div`
    box-shadow: 2px 2px 9px 0px #0000001f;
    border-radius: 5px;
    transition: all 0.3s;
    padding: 20px;
    cursor: pointer;
    &:hover{
    box-shadow: 2px 2px 9px 0px #00000038;
    transform:scale(1.1)
    }
`

const PlayerImage = styled.img`
    max-width:300px;
    margin-bottom: 20px;
`
const PlayerDataContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const PlayerData = styled.p`
    ${noSpace};
    font-weight: bold;

`

const Label = styled.p`
    ${noSpace};
    color: #333;

`