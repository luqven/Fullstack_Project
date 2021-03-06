class Api::VideosController < ApplicationController

  def index
      @videos = Video.all
      render :index
  end

  def new
    @video = Video.new
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 401
    end
  end

  def show
    @video = Video.find_by(id: params[:id])
    @likes = @video.likes
    render :show
  end

  def update
    @video = Video.find_by(id: params[:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 401
    end
  end

  def search_index
    @videos = Video.all
  end
  def trending_index
    @videos = Video.order(:play_count)
  end

  def destroy
  end

  def video_params
    params.require(:video).permit(:title, :body, :channel_id, :uploader, :user_id, :video_attachment, :thumbnail_attachment, :search_terms, :play_count)
  end

end