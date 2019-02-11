
# Fullstack Project

### iTube
##### A YouTube Clone*


* [Backend Routes](https://github.com/luqven/iTube/wiki/Backend-Routes)
* [DB Schema](https://github.com/luqven/Fullstack_Project/wiki/Database-Schema)
* [Frontend Routes](https://github.com/luqven/iTube/wiki/Frontend-Routes)
* [MVP List](https://github.com/luqven/Fullstack_Project/wiki/MVP)
* [Sample State](https://github.com/luqven/Fullstack_Project/wiki/Sample-State)





#### Progress

- [x] Hosting on Heroku
- [x] Video 
- [x] Likes
- [ ] Comments
- [ ] Play-count 
- [x] Channels


# Welcome to iTube

Hi! This is the README for **iTube**. iTube is a React-Redux app that allows users to share videos with one another. The goal of this app is to display the power of the React-Redux cycle using AWS S3 APIs for video hosting, and a Rails backend for database management.


# Functionalities

iTube allows users to upload, view, like, and comment on videos. User's videos get added to their channels, and channels can have many subscribed users. The user can view his channel and his subscribed channels.

iTube stores files on the web, so take appropriate precautions, as files will live on the AWS server until the database is resseded.

## Search

Type the video title or topic you have in mind in the **Search** field, and iTube will fetch the most relevant results. You can select the one that most suits your needs.


# Libraries & technologies

**iTube** makes use of:
- React for componenet creation
- Redux for state management
- NodeJs for NPM packages like WebPack
- Rails for dabaasse management
- HTML 5 for convas rendering
- CSS

**Main Components**

- ``root.jsx`` Component that wraps the rest in the Provider and HashRouter.
- ``app.jsx`` Component that provied the store the rest of the components, manages Redirect logic.
- ``home.js`` Home page component
- ``Videos``
  - ``video_form_container.jsx`` container for the edit and upload video forms.
  - ``video_edit_container.jsx`` container for the edit form.
  - ``video_upload_container.jsx`` container for the upload form.
  - ``video_preview_container.jsx`` container for the video preview componenet
  - ``video_show_container.jsx`` container for the video show componenet
  - ``video_form.jsx`` form for editing & uploading videos
  - ``video_preview.jsx`` component that render preview image, title, and more for an individual video.
  - ``video_show.jsx`` component that render video file, description, title, likes, and comments.

  Other notable components:
- ``channel.jsx`` Channel component that renders `VideoPreview` components for each video in channel's slice of state.
- ``like_button.jsx`` Component that renders a like button that on click adds likes to the backend. Displays a video's number of total likes.
- ``nav_bar.jsx``  Component that renders `modal.jsx` and `dropdown.jsx`.


# MVP Features

Features to be completed, in order of planned implementation:

| Feature | Description | Target Completion Date |
| ------  | ------ | ------ |
| Hosting on Heroku  | Project files living on Heroku | 01 / 22 / 2019 |
| User Profiles | Users login, have a show page | 01 / 25 / 2019 |
| Video | Video upload and playback | 01 / 27 / 2019 |
| Likes | Likes for videos | 01 / 28 / 2019 |
| Comments | Leaving comments on video page | 01 / 30 / 2019 |
| Play-count | Videos display their stats | 01 / 31 / 2019 |
| Channels | Videos live in channels | 02 / 01 / 2019 |

## Target Schedule

### 1. Hosting on Heroku (01/22/2019)
### 2. User Profiles (01/23/2019, 2 days)
* Users can sign up, sign in, log out
* Users can use a demo login to try the site
* Users can't use certain features without logging in 
### 3. Video (01/25/2019, 2 days)
* Logged in users can upload videos
* Logged in users can edit existing videos
### 4. Likes (01/27/2019, 1 days)
* Logged in users can like videos
* Logged in users can edit existing likes
### 5. Comments (01/28/2019, 2 days)
* Logged in users can comment on videos
* Logged in users can edit existing comments
### 6. Play-count (01/30/2019, 1 days)
* Videos have play-counts
* Videos can be sorted by popularity
### 7. Channels (01/31/2019, 2 days)
* Logged in users can create one channel
* Logged in users can edit existing channel
* Logged in users can subscribe to other user's channel
* Videos belong to specific channels
