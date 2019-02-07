import React from 'react'
import VideoPreview from '../videos/video_preview_container';
import UserCircle from '../user_show/user_circle_container';

export default class ChannelCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoPreviews = this.props.channel.videoIds.map((videoId, idx) => {
      return <VideoPreview videoId={videoId} key={idx} />
    })

    return (
      <>
        <li className="show-video-carousel">
        <UserCircle userId={this.props.userId}/>
        </li>
        <li className= "preview-carousel">
          {videoPreviews}
        </li>
      </>
    )
  }
}