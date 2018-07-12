class CheckboxesController < ApplicationController

  def set_chapter_checked

    checkbox = Checkbox.find_by(:user_id => current_user.id, :chapterkey => params[:chapterkey])
    if checkbox
      checkbox.update_attributes(status: params[:status])
    else
      Checkbox.create!(user_id: current_user.id, chapterkey: params[:chapterkey], status: params[:status])
    end

    render json: {result: "success"}
  end

end
