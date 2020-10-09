import React from 'react'
import  './style.css'

const GrayImg = (props) => {
  return (
    // https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg
    // <Fragment>
    <img className={props.gray ? 'gray-img': 'color-img'} src={props.img_url} alt="planeta"></img>
      // <img className='gray-img' src={props.img_url} alt="planeta"></img>
    // </Fragment>
  )
}

export default GrayImg