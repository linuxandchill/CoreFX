class CreateRoles < ActiveRecord::Migration[5.0]
  def up
    ['regular_user', 'signed_up_user', 'pro_user'].each do |role_name|
      Role.create! name: role_name
    end
  end
end
