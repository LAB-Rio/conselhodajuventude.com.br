require 'sinatra'
require 'rdiscount'
require 'open-uri'
require 'json'
require 'pp'

enable :static

get '/inscricao.' do
  redirect "https://docs.google.com/forms/d/14lPJko-tdXubeCcJnaeYhrh-JOuyJLB_0FeMO7n0qrM/viewform"
end

get  '/inscricao.' do
  redirect "https://docs.google.com/forms/d/14lPJko-tdXubeCcJnaeYhrh-JOuyJLB_0FeMO7n0qrM/viewform"
end

get '/calendario' do
  slim :calendario, :layout => true
end

get '/regimento' do
   redirect "/sobre#regimento"
end

get '/calendario.' do
  slim :calendario, :layout => true
end

get '/' do
  @title = "Conselho da Juventude da Cidade"
  slim :home
end

get '/sobre'  do
  slim :sobre, :layout => true
end

get  '/o-conselho' do
  slim :sobre, :layout => true
end

get '/home'  do
  slim :home, :layout => true
end

get '/inicio' do
  slim :home, :layout => true
end

get '/transparencia' || '/visoes' || '/videos' do
    slim :transparencia, :layout => true
end

