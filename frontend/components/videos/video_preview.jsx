import React from 'react';

export default class VideoPreview extends React.Component {
    constructor(props) {
        super(props)
        this.updateHistory = this.updateHistory.bind(this);
    }

    updateHistory() {
        this.props.history.push(`/videos/${this.props.videoId}`)
    }

    componentDidMount() {
        this.props.getAllVideos()
    }

    render() {
        if (Object.values(this.props.videos).length >= 1) {
            debugger
            return (
                <div key={this.props.videoId / 1.12 + 1} className="temp-image-container">
                    <img onClick={this.updateHistory} key={this.props.videoId / 1.1 + 1}
                        className="temp-image"
                        src={`${this.props.videos[this.props.videoId].thumbnail_url}`} />
                    <li key={this.props.videoId}>
                        <p onClick={this.updateHistory}> {this.props.videos[this.props.videoId].title} </p>
                    </li>
                </div>
            )
        }
        return null;
    }
}