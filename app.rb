require 'sinatra'

enable :static

get '/' do
  send_file 'public/index.html' 
end

get '/inscricao' do
  redirect "https://docs.google.com/forms/d/14lPJko-tdXubeCcJnaeYhrh-JOuyJLB_0FeMO7n0qrM/viewform"
end

get '/transparencia' do
  send_file 'public/transparencia.html'
end

get '/sobre' do
  send_file 'public/saiba_mais.html'
end

get '/calendario' do
  send_file 'public/calendario.html'
end