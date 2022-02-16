Rails.application.routes.draw do
  
  resources :items

  #session
  get "/current", to: "sessions#current"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/total", to: "sessions#total"
  
  # user
  get "/customers", to: "users#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  put "/update", to: "users#update"
  delete "/delete", to: "users#destroy"

  #item
  get "/items/:product", to: "items#type"
  get "/supplies", to: "items#supplies" #change all "accessories"
  get "/plants", to: "items#plants" #change all "Bonsais"


  #users_item
  get "/cart", to: "users_items#show"
  post "/add", to: "users_items#create"
  delete "/remove/:id", to: "users_items#destroy"
  delete "/checkout", to: "users_items#checkout"

  # get "/allcarts", to: "users_items#index"
  # patch "/update", to: "users_items#update"


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

