import styled from 'styled-components'
export const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.1em;
  background: none;
` 
export const Container = styled.div`
overflow: auto;
  width: 100%; 
  display: flex;
`
export const Item = styled.div`
  width: 100px;
  height: 40%;
  margin: 0 5px;
  &:hover{
    cursor: pointer;
  }
  display: flex; 
  flex-direction: column; 
  align-items: center;
  font-size: .8em;
  `