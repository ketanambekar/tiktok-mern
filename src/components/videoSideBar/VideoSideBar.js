import React, { useState } from 'react';
import './VideoSideBar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSideBar({likes, shares, messages}) {
    const [like, setLike] = useState(false)
    return (
        <div className="videoSideBar">
            <div className="videoSideBar__button">
                {like ?
                    <FavoriteIcon fontSize='large'  onClick={(e)=> setLike(false)}/>
                    :
                    <FavoriteBorderIcon fontSize='large' onClick={(e)=> setLike(true)} />
                }
                <p>{like? likes : likes-1}</p>
            </div>

            <div className="videoSideBar__button">
                <MessageIcon fontSize='large' />
                <p>{messages}</p>

            </div>

            <div className="videoSideBar__button">
                <ShareIcon fontSize='large' />
                <p>{shares}</p>

            </div>
        </div>
    )
}

export default VideoSideBar
