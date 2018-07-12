class PagesController < ApplicationController
  def index
  end

  def show
  end

  def pro
    if user_signed_in?
      if current_user.has_role? :pro_user
        redirect_to root_path
      else
        @stripe_list = Stripe::Plan.all
        @plans = @stripe_list[:data]
        @plan = @plans.first
      end
    else
      redirect_to '/users/sign_in'
    end
  end

  def articles
  end

  def charts
  end

  def news
  end

  def disclaimer
  end

  def subscription_checkout
    plan_id = params[:plan_id]
    plan = Stripe::Plan.retrieve(plan_id)
    customer = Stripe::Customer.create(
      :description => "Customer for #{current_user.email}",
      :source => params[:stripeToken],
      :email => "#{current_user.email}"
    )
    stripe_subscription = customer.subscriptions.create(:plan => plan.id)
    customer_id = stripe_subscription[:customer]
    subscription_id = stripe_subscription[:id]

    # Store customer id and subscription id to user and make the user pro
    current_user.update_attributes(:customerid => customer_id, :subscriptionid => subscription_id)
    current_user.add_role :pro_user

    redirect_to root_path
  end
end
