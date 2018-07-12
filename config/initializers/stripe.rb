if Rails.env == 'production'
  Rails.configuration.stripe = {
    :publishable_key => ENV['PUBLISHABLE_KEY'],
    :secret_key      => ENV['SECRET_KEY']
  }
else
  Rails.configuration.stripe = {
    :publishable_key => 'pk_test_oNzXsOjUPHsHMwitJsgjE2Qd',
    :secret_key      => 'sk_test_Md3DIctpaw1MlY7ekXBwVfU2'
  }
end

Stripe.api_key = Rails.configuration.stripe[:secret_key]
