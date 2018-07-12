class AddSubscriptionToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :customerid, :string
    add_column :users, :subscriptionid, :string
  end
end
