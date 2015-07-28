require 'sinatra'

enable :static

get '/' do
  send_file 'public/index.html' 
end

get '/inscricao' do
  redirect "https://docs.google.com/forms/d/14lPJko-tdXubeCcJnaeYhrh-JOuyJLB_0FeMO7n0qrM/viewform"
end
