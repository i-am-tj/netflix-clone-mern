import './ListItem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://assets.codepen.io/6093409/hubspot-video-example.mp4";
  return (
    <div className="listItem"
      style={{left: isHovered && index * 225 - 50}} 
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src="https://chinmaynakhwa.files.wordpress.com/2023/08/wp-1691908476851.jpg" alt="" />
        {isHovered && (
          <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className='icon' />
              <AddIcon className='icon'/>
              <ThumbUpIcon className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span className='info-tag'>New</span>
              <span className="info-age-limit">U/A 13+</span>
              <span className='info-duration'>2h 23m</span>
            </div>
            <div className="genres">
              <div className='genre'>Action</div>
            </div>
          </div>
          </>
        )}
        
    </div>
  )
}

export default ListItem