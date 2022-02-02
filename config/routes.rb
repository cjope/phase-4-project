Rails.application.routes.draw do
  
  resources :users_items
  resources :items
  resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/customers", to: "users#index"

  get "/cart", to: "items#show"

  get "/total", to: "users#total"

  # get "/cart", to: "usersitem#show"
  # get "/carts", to: "usersitem#index"
  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
