import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './post.css';
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { PiShareFatThin } from "react-icons/pi";




function PostCard() {
  return (
    <Card style={{ width: '100%',margin:'5px' }}>
        <div class="post-card">
        <div class="post-header">
            <img src="profile.jpg" alt="User Profile Picture" class="profile-pic"/>
            <div class="user-info">
                <span class="username">John Doe</span>
                <span class="post-date">May 24, 2024</span>
            </div>
        </div>
        <div class="post-content">
            <p>This is an example of a social media post. Sharing some thoughts and a beautiful image!</p>
            <img src="post-image.jpg" alt="Post Image" class="post-image"/>
        </div>
        <div class="post-actions">
            <button class="action-btn"><SlLike /><p>10</p></button>
            <button class="action-btn"><FaRegComment /><p>10</p></button>
            <button class="action-btn"><PiShareFatThin /><p>10</p></button>
        </div>
    </div>

    </Card>
  );
}

export default PostCard;