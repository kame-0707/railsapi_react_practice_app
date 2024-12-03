Rails.application.routes.draw do
  root "videos#top"
  resources :videos, only: %i[new create index show edit update destroy]
end
