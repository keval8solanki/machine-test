import styled, { css } from 'styled-components'

export const noSpace = css`
    margin: 0;
    padding: 0;
`

export const GridContainer = styled.div`
    padding: 20px;
    display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    
`
