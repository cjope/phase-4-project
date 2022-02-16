Rails.application.routes.draw do
  
  # resources :users_items
  # resources :items
  # resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  put "/update", to: "users#update"
  delete "/delete", to: "users#destroy"


  get "/customers", to: "users#index"
  get "/current", to: "sessions#current"


  
  get "/supplies", to: "items#supplies"
  get "/plants", to: "items#plants"


  get "/cart", to: "users_items#show"
  get "/total", to: "sessions#total"
  delete "/remove/:id", to: "users_items#destroy"
  delete "/checkout", to: "users_items#checkout"
  post "/add", to: "users_items#create"
  # get "/allcarts", to: "users_items#index"
  # patch "/update", to: "users_items#update"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

