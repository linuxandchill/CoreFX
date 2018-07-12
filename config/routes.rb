Rails.application.routes.draw do
  get 'subscribers/index'

  devise_for :users

  get 'pages/index'
  get 'pages/show'
  get '/disclaimer', to: "pages#disclaimer"
  get '/pro', to: "pages#pro"
##  get '/news', to: "pages#news"
  get '/charts', to: "pages#charts"
## get '/articles', to: "pages#charts"
  resources :subscribers 

  root 'hello_world#index'

  get '/the-great-deception', to: 'hello_world#thegreatdeception'
  get '/mega-banks', to: 'hello_world#megabanks'
  get '/liquidity', to: 'hello_world#liquidity'
  get '/brokers', to: 'hello_world#brokers'
  get '/candlestick-basics', to: 'hello_world#candlesticks'
  get '/manipulation-phases', to: 'hello_world#manipulationphases'
  get '/sessions', to: 'hello_world#sessions'
  get '/levels', to: 'hello_world#levels'
  get '/setups', to: 'hello_world#setups'
  get '/candlestick-formations', to: 'hello_world#candlesticksTwo'
  get '/pullbacks', to: 'hello_world#pullbacks'
  get '/risk-reward', to: 'hello_world#riskReward'
  get '/stop-loss', to: 'hello_world#stoploss'
  get '/advanced-setups', to: 'hello_world#setupsTwo'
  get '/psychology', to: 'hello_world#psychology'
  get '/trading-the-news', to: 'hello_world#newsreleases'

  get '/big-pippin', to: 'hello_world#bigpippin'
  get '/advanced-levels', to: 'hello_world#advancedlevels'
  get '/eur-gbp-tips', to: 'hello_world#eurgbptrading'

  post '/set-chapter-checked/:chapterkey', to: 'checkboxes#set_chapter_checked', :as => 'set_chapter_checked'

  post '/subscription_checkout', to: 'pages#subscription_checkout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
