require 'sinatra'

enable :static

get '/' do
  send_file 'public/index.html' 
end

