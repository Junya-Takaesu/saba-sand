require 'filewatcher'
require_relative "./view_generator.rb"

files = ARGV.empty? ? [] : ARGV

Filewatcher.new(files).watch do |filename, event|
  # menu_list の配列の内容が変更されないので、テンプレも変わらない
  generator = ViewGenerator.new("./index.html.erb")
  generator.exec
end