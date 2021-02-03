require "erb"

class ViewGenerator

  def initialize(template_file)
    @template = File.read template_file
    @result_file_name = (template_file.split(".").select {|a| a != "erb"}).join(".");
  end

  def exec
    menu_list = [
      {name_en: "THE SABA SAND", name_jp: "サバサンド", price: 555, description: "焼き立てほやほやのサバ、新鮮なトマトとレタスのサンドウィッチ。トルコ発祥のやみつきサンドです。", special: true},
      {name_en: "THE EGG SAND", name_jp: "タマゴ", price: 666, description: "", special: false},
      {name_en: "THE CHICKEN SAND", name_jp: "チキンサンド", price: 777, description: "", special: false},
      {name_en: "THE VEGE SAND", name_jp: "野菜サンド", price: 888, description: "", special: false},
      {name_en: "THE GOZILLA SAND", name_jp: "ゴジラサンド", price: 999, description: "", special: false},
      {name_en: "THE TURKEY SAND", name_jp: "ターキーサンド", price: 1111, description: "", special: false},
      {name_en: "THE HOT CHILL SAND", name_jp: "ホットチリサンド", price: 1222, description: "", special: false},
      {name_en: "THE DEEP FRIED BEAF SAND", name_jp: "メンチカツサンド", price: 1333, description: "", special: false},
    ]

    campaigns = [
      {title: "ハッシュタグキャンペーン！", description: "<span class=\"marker\">#サバサンド</span>をつけて投稿していただいた皆様の中から、抽選で100名様に100万円プレゼント！"},
      {title: "ハッシュタグキャンペーン！", description: "<span class=\"marker\">#サバサンド</span>をつけて投稿していただいた皆様の中から、抽選で100名様に100万円プレゼント！"},
      {title: "ハッシュタグキャンペーン！", description: "<span class=\"marker\">#サバサンド</span>をつけて投稿していただいた皆様の中から、抽選で100名様に100万円プレゼント！"},
      {title: "ハッシュタグキャンペーン！", description: "<span class=\"marker\">#サバサンド</span>をつけて投稿していただいた皆様の中から、抽選で100名様に100万円プレゼント！"},
    ]

    erb = ERB.new(@template)
    File.open(@result_file_name, mode = "w") {|f|
      f.write(erb.result(binding))
    }
  end
end

if $0 == __FILE__
  exit if ARGV.empty?
  view_generator = ViewGenerator.new(ARGV.first)
  view_generator.exec
end