import React from 'react'
import {
  Top_C, Top_C_Wrapper, Title, Btn,
  Degrees, Status, WindDir,
  Add, Temp,
  LocalTime, TopComponentImage
} from '../../assets/Styles' 
import styles
  from "../../assets/animation.module.css"
import { get_current_time, get_future_day, }
  from '../../MyLib'

export default function TopComponent(props) {
  const { isLoading, isToday } = props
  if (isLoading) {
    return (<Spin />)
  }
  if (!isToday) {
    return <FutureWeather {...props} />
  }

  const {
     location, current, condition, onClick,  } = props
  return (
    <Top_C>
      <TopComponentImage
        src='https://profoto.azureedge.net/cdn/049c738/contentassets/783cced597e14b76a51f7281c841cec3/toppimage_umbrellas2x.jpg?width=900&quality=90&format=jpg' />
      <Top_C_Wrapper>
        <Title>{location.name}</Title>
        <LocalTime>{get_current_time(location.localtime)}</LocalTime>
        <Degrees>
          <img
            src={condition.icon}
            width='90px'
            className={
              current.is_day && condition.text === 'Sunny'
                ? styles.image_animated
                : styles.image
            }
          />
          <div>
            <Temp>{current.temp_c}&deg;</Temp>
            <Add>{`${current.humidity}% humidity`}</Add>
            <Add>
              {`${current.wind_kph} km/h `}
              <WindDir>{current.wind_dir}</WindDir>
            </Add>
          </div>
        </Degrees>
        <Status>{condition.text}</Status>
        <Button onClick={onClick} />
      </Top_C_Wrapper>
    </Top_C>
  )
}

function Button({ onClick }) {
  return <Btn onClick={onClick}>
    Select Location
  </Btn>
}
  
function Spin() {
  return (
    <div className={styles.lds_roller}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
function FutureWeather(props)
{
  console.log('FUTURE WEATHER PROPS', props)
  if (props) {
    const { name, day, onClick, date_epoch} = props
    const { condition, mintemp_c, maxtemp_c, maxwind_kph, avgtemp_c} = day
  return (
    <Top_C>
      <Local_time time={date_epoch} />
      <TopComponentImage src='https://profoto.azureedge.net/cdn/049c738/contentassets/783cced597e14b76a51f7281c841cec3/toppimage_umbrellas2x.jpg?width=900&quality=90&format=jpg' />
      <Top_C_Wrapper>
       <FunctionTitle title={name} />
        <Degrees>
          <img
            src={condition.icon}
            width='90px'
            className={
             condition.text === 'Sunny'
                ? styles.image_animated
                : styles.image
            }
          />
          <div>
            {/* MIN MAX TEMPERATURE */}
            <Temperature
              mintemp={mintemp_c} maxtemp={maxtemp_c} />
            
            {/* AVERAGE TEMPERATURE */}
            <Temp>{avgtemp_c}&deg;</Temp>

            {/* <Add>{`${current.humidity}% humidity`}</Add> */}
            <Add>
              {`Max wind: ${maxwind_kph} km/h `}
              {/* <WindDir>{current.wind_dir}</WindDir> */}
            </Add>
          </div>
        </Degrees>
        <Status>{condition.text}</Status>
      </Top_C_Wrapper>
    </Top_C>
    )
  }
}


function FunctionTitle({ title }) {
  return <Title> {title}</Title>
}
function Local_time({ time }) {
  return <LocalTime>{get_future_day(time)}</LocalTime>
}

function Temperature({ mintemp, maxtemp }) { 
  return <Temp>{mintemp}&deg;...{maxtemp}&deg;</Temp>
}
