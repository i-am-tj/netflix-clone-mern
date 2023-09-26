import './List.scss';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from '../ListItem/ListItem';
import { useRef } from 'react';

const List = () => {
    const listRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === 'left') {
            listRef.current.style.transform = `translateX(${230+distance}px)`;
        }
    }
  return (
    <div className="list">
        <span className="listTitle">Continue watching for /Profile</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlinedIcon className='sliderArrow left' onClick={() => handleClick("left")}/>
            <div className="container" ref={listRef}>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
            <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleClick("right")} />

        </div>
    </div>
  )
}

export default List