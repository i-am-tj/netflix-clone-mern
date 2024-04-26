import './Watch.scss';

import ArrowBackOutlined from '@mui/icons-material/ArrowBackOutlined';

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className='video' autoPlay progress controls src='https://assets.codepen.io/6093409/hubspot-video-example.mp4' alt='Progress video' />
        </div>
    );
}

export default Watch