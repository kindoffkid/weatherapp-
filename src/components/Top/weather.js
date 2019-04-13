import React from 'react'

// STYLES
import { Location, Degrees, Status } from '../../assets/Styles' 
import styles from '../../assets/animation.module.css'

// COMPONENT
export default function Weather( props ) {
  const { text, icon, } = props.current.condition
  const { temp_c, is_day } = props.current
  return (
    < >
      <Location>Location: <strong>{
        props.location.name
      }</strong></Location>
      <Degrees>
        <img
          src={icon}
          width='60px'
          className={
            is_day && text === 'Sunny'
              ? styles.image_animated : styles.image}/>
        <span>{temp_c}&deg;</span>
      </Degrees>
      <Status>{ text }</Status>
    </>
  );
}