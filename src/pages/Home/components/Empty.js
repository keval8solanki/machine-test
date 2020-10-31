import styled from 'styled-components'
import EmptySVG from '../../../assets/icons/empty.svg'

function Empty() {
    return (
        <EmptyContainer>
            <EmptyIcon src={EmptySVG} alt='Empty Icon' />
        </EmptyContainer>
    )
}

export default Empty
const EmptyContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`
const EmptyIcon = styled.img`
    width: 500px;
`