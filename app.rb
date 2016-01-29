require 'sinatra'

enable :static

get '/inscricao' do
  redirect "https://docs.google.com/forms/d/14lPJko-tdXubeCcJnaeYhrh-JOuyJLB_0FeMO7n0qrM/viewform"
end

get '/calendario' do
  send_file 'public/calendario.html'
end

get '/' do
  @title = "Conselho da Juventude da Cidade"
  slim :home
end

get '/sobre' do
  slim :sobre, :layout => true
end

get '/home' do
  slim :home, :layout => true
end

get '/transparencia' do
    slim :transparencia, :layout => true
end