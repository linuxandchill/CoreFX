class SubscribersController < ApplicationController
  def index
    @subscriber = Subscriber.new
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    if @subscriber.save
      cookies[:saved_subscriber] = true
      redirect_to root_path 
    else
      redirect_to root_path, notice: "Failed to save."
    end 
  end

  private

  def subscriber_params
    params.require(:subscriber).permit(:email)
  end 
end
