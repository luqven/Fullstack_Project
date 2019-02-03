import React from 'react';

export default class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.video,
      videoUrl: this.props.video.video_url
    };
  }

  componentDidMount(){
    this.props.getVideo(this.props.video.id)
  }

  render() {
    let userInitial = this.props.video.uploader.username[0].toUpperCase();
    return (
      <div className="video-show-container">
        <ul className="video-show">
          <video width="320" height="240" preload="metadata" controls="controls">
            <source src={`${this.props.video.video_url}`} type="video/mp4"></source>
            Your browser does not support the video tag.
        </video>
          <li>{this.props.video.title}</li>
        </ul>
        <div className = "video-user-info">
          <div className="dropdown-user-icon">
            <p>{userInitial}</p>
            <p className="user-initial">{this.props.video.uploader.username}</p>
          </div>
          <h3 className="video-text">{this.props.video.body}</h3>
        </div>
      </div>
    )
  }


}