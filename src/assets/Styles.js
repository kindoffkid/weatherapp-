import styled, { keyframes } from 'styled-components'

export const Temp = styled.span`
  text-align: left;
  font-size: 1.1em;
  display: block;
  `
export const Add = styled.span`
  text-align: left;
  font-size: .3em;
  display: block;
  margin-bottom: 3px;
`
export const WindDir = styled.span`
  font-size: .7em;
`
export const AppWrapper = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%; height: 100%;
  `
export const MainWrapper = styled.div`
  border: 1px solid #999;
  border-radius: 3px;
  width: 600px;
  height: 500px;
  display: flex;
  flex-direction: column;
`;

export const Top_C = styled.div`
  flex: 0 0 50%;
  display: flex;
  flex-direction: column; 
  justify-content:center;
  align-items: center;
  position: relative;
  text-align: center;
  /* background: #445a71; */
  color: whitesmoke;
`
export const Top_C_Wrapper = styled.div`
  height: 100%;
  width: 90%;
  font-size: .8em;
`
export const TopComponentImage = styled.img`
  position: absolute; 
  display: block; 
  width: 100%;
  height: 250px;
  background-size: contain;
  z-index: -15;
  opacity: .9;
`
export const Bottom_C = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(28, 28, 28, 1) 8%,
    rgba(28, 28, 28, 1) 8%,
    rgba(44, 44, 44, 1) 26%,
    rgba(44, 44, 44, 1) 26%,
    rgba(71, 71, 71, 1) 67%,
    rgba(89, 89, 89, 1) 85%,
    rgba(89, 89, 89, 1) 85%,
    rgba(76, 76, 76, 1) 94%,
    rgba(76, 76, 76, 1) 94%
  );
  width: 100%;
  flex: 0 0 50%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: whitesmoke;
  overflow: auto;
       `
export const Location = styled.div`
  margin-bottom: 15px;
`
export const Title = styled.h1`
   margin-bottom: 10px;
`
export const LocalTime = styled.div`
  font-size: 1.5em;
  
`
export const Degrees = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 3em;`
export const Status = styled.div`
  font-style: oblique;
  margin-bottom: 5px;
  `

export const Btn = styled.button`
  text-align: center;
  border-radius: 5px;
  box-shadow: none;
  border: 1px solid orange;
  background: orange;
  padding: 3px 7px;
  color: #000;
  padding: 3px 9px;
  font-size: 0.9em;
  transition: 0.3s all ease-in-out;
  &:hover {
    cursor: pointer;
    color: whitesmoke;
    background: #999;
    border: 1px solid #999;
  }
  &:focus{
    outline:none;
  }
  `;

