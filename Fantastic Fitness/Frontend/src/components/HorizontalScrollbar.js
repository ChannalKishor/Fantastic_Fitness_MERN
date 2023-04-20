import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import RightArrowIcon from "../Images/right-arrow.png"
import LeftArrowIcon from '../Images/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className='right-arrow'>
      <img src={LeftArrowIcon} alt="right-arrow" style={{width:"30px"}}/>
    </Typography>
  )
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className='left-arrow'>
      <img src={RightArrowIcon} alt="left-arrow" style={{width:"30px"}}/>
    </Typography>
  )
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => 
        <box key={item.id || item} itemId={item.id || item} title={item.id || item} margin='0 40px' style={{display:"flex", width:"fit-content"}}>
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </box>
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar