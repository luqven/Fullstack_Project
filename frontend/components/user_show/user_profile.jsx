import React from 'react';
import Modal from "../modal/modal";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      videos: this.props.videos
    };
    this.userInitial = this.props.user.username[0].toUpperCase();   
  }

  handleEventType(type) {
    return ''
  }

  componentDidMount(){
    this.props.getUserVideos(this.state.user.id);
  }

  render() {
    this.props.closeModal();
    const videoList = []
    let videos = this.props.videos.forEach(video => {
      videoList.push(video.title)});
    const lis = videoList.map((video, idx) => {
      return (
        <div key={ idx / 1.12 + 1}className="temp-image-container">
          <img key={idx / 1.1 + 1} className="temp-image" src="https://i.stack.imgur.com/PtbGQ.png" alt="" srcSet=""/>
          <li key={idx}>{video}</li>
        </div>
      )
    })
    
    return (
      <div className="showpage-container">
        <div className="showpage-user-icon">
          <p>{this.userInitial}</p>
        </div>
        <p>{this.state.user.username}</p>
        <section>
          <ul className="showpage-menu">
            {/* <Modal /> */}
            <li className="s-menu-selected">
              <a  href="#">Videos</a>
            </li>
            <li>
              <a href="#">Channels</a>
              </li>
          </ul>
        </section>
        <section className="categories">
          {/* <Modal /> */}
          <div className="showpage-video-carousel">
            <ul className="show-video-carousel">
            {lis}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
