import React from 'react';
import LikeButton from '../likes/like_button';

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoUrl: this.props.video.video_url,
    };
    this.handleClick = this.handleClick.bind(this);
    this.likers = this.likers.bind(this);
    this.likedByUser = this.likedByUser.bind(this);
    this.getUserLike = this.getUserLike.bind(this);
  }

  componentDidMount(){
    this.props.getLikes(this.props.video.id);
    this.props.getVideo(this.props.video.id);
  }

  handleClick(){
    this.props.history.push(`/update/${this.props.video.id}`)
  }

  // get array of user ids that likes this video
  likers() {
    return Object.values(this.props.likes).map(like => {
      return like.liker_id;
    });
  }
  // determine if current user liked the video
  likedByUser() {
    let likers = this.likers();
    return likers.includes(this.props.user);
  }

  getUserLike() {
    let likers = this.likers();
    const allLikes = Object.values(this.props.likes).map((like) => {
      return like.id;
    });
    return allLikes[likers.indexOf(this.props.user)];
  }


  render() {
    let userInitial = this.props.video.uploader.username[0].toUpperCase();
    let editButton;

    if(this.props.user === this.props.video.uploader.id) {
      editButton = <button onClick={this.handleClick} className="edit-btn">Edit Video</button>
    }

    let likeButton;
    if (Object.values(this.props.likes).length >= 1) {
      if (this.likedByUser()) {
        // display like button as selected
        likeButton = <LikeButton type="liked" like={this.props.likes[this.getUserLike()]} />
      } else {
        // display liked button as unselected
        likeButton = <LikeButton type="like" video_id={this.props.video.id} />
      }
    } else {
      // display liked button as unselected
      likeButton = <LikeButton type="like" video_id={this.props.video.id} />
    }

    return (
      <div className="video-show-container">
        <ul className="video-show">
          <video width="320" height="240" preload="metadata" controls="controls" 
          src={`${this.props.video.video_url}`} type="video/mp4">
        </video>
          <li>{this.props.video.title}</li>
        </ul>
        <div className = "video-user-info">
          <div className="dropdown-user-icon">
            <p>{userInitial}</p>
            <p className="user-initial">{this.props.video.uploader.username}</p>
          </div>
          <h3 className="video-text">{this.props.video.body}</h3>
          <div className="video-like-btn">
            {likeButton}
          </div>
          <div className="video-edit-btns">
            {editButton}
          </div>
        </div>
      </div>
    )
  }


}