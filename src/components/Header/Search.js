import React from 'react'
import styled from 'styled-components'
import { Input,Button } from '../style';
export default function Search() {
  return (
    <SearchArea>
        <form>
            <Input type="text" placeholder='Search Here...' />
            <Button>Search News</Button>
        </form>
    </SearchArea>
  )
}

// Style 
const SearchArea = styled.div`
    
`;