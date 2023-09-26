import './Featured.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "TV Shows"}</span>
                <select name='genre' id='genre'>
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img width="100%" src="https://wallpapers.com/images/hd/hanuman-render-close-up-4k-hd-3d-ahhiyo7dqfbi8muk.jpg" alt="Bajrangbali" />
        <div className="info">
            <img src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-hindi-typography-hanuman-jayanti-ki-hardik-shubhkamnaye-means-happy-hanuman-png-image_6569349.png" alt="Bajrangbali Logo" />
            <span className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in mollit anim id est laborum.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlinedIcon />
                    <span>More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured