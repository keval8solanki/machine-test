import { useState } from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { searchTermAtom } from '../../../recoil/atoms';

function Search() {

    const [searchTerm, setSearchTerm] = useRecoilState(searchTermAtom);

    return (
        <SearchContainer >
            <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." />
        </SearchContainer>
    )
}

export default Search

const SearchContainer = styled.div`
    padding: 20px;
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 1px 1px 1px 1px solid;

`

const SearchInput = styled.input`
    width: 100%;
    outline: none;
    padding: 5px 20px;
    border: 1px solid grey;
    border-radius: 50px;
`