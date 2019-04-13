import React from 'react'

import { Bottom_C } from '../../assets/Styles'
import { Container, Item, Title} from '../../assets/Forecast'
import { futureDay, futureDayMonth } from '../../MyLib'

export default function Bottom( { days, onDaySelect } ) {
console.log( days )
  return (
    <Bottom_C>
      <Title> 5 Days Ahead </Title>
      <div style={{display: 'flex'}}>
      {days
          ? <Forecast days={days} onClick={onDaySelect}/> : null}
      </div>
    </Bottom_C>
  )
}

function Forecast({ days, onClick }) {
  const Component = days.map((elem, index) => { 
    return (
      <Container key={index} onClick={()=> onClick(index)}>
        <Item>
          <Image url={elem.day.condition.icon} />
          <h4 style={{ textAlign: 'center' }}> {futureDay(elem.date_epoch)}</h4>
          <h5 style={{ textAlign: 'center' }}> {futureDayMonth(elem.date_epoch)}</h5>
          <Temperature
              temperature={elem.day.avgtemp_c} />
        </Item>
      </Container>
    )
  }) 
  return Component
}
  
function Image({ url }) {
  return <img src={url} />
}

function Temperature({ temperature})  {
  if (temperature - 1 < 0) {
    return <span>-{temperature}&deg;</span>
  }
  return <span>{temperature}&deg;</span>
}