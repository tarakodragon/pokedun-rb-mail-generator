const ItemList = Object.freeze([
  Object.freeze({ id: 1, name: "きのえだ" }),
  Object.freeze({ id: 2, name: "てつのトゲ" }),
  Object.freeze({ id: 3, name: "ぎんのハリ" }),
  Object.freeze({ id: 4, name: "きんのキバ" }),
  Object.freeze({ id: 5, name: "サボネアのハリ" }),
  Object.freeze({ id: 6, name: "サニーゴのトゲ" }),
  Object.freeze({ id: 7, name: "ゴローンのいし" }),
  Object.freeze({ id: 8, name: "いしのつぶて" }),
  Object.freeze({ id: 9, name: "つうかスカーフ" }),
  Object.freeze({ id: 10, name: "かいふくリボン" }),
  Object.freeze({ id: 11, name: "ねじりハチマキ" }),
  Object.freeze({ id: 12, name: "ピントレンズ" }),
  Object.freeze({ id: 13, name: "ねらわれハチマキ" }),
  Object.freeze({ id: 14, name: "くっつかずきん" }),
  Object.freeze({ id: 15, name: "かんつうバンダナ" }),
  Object.freeze({ id: 16, name: "しあわせリボン" }),
  Object.freeze({ id: 17, name: "みとおしメガネ" }),
  Object.freeze({ id: 18, name: "キーのハチマキ" }),
  Object.freeze({ id: 19, name: "パワーバンダナ" }),
  Object.freeze({ id: 20, name: "モモンスカーフ" }),
  Object.freeze({ id: 21, name: "ふみんスコープ" }),
  Object.freeze({ id: 22, name: "ワープスカーフ" }),
  Object.freeze({ id: 23, name: "きついハラマキ" }),
  Object.freeze({ id: 24, name: "こっそりスカーフ" }),
  Object.freeze({ id: 25, name: "きんのリボン" }),
  Object.freeze({ id: 26, name: "ぱっちりメガネ" }),
  Object.freeze({ id: 27, name: "はらぺこリボン" }),
  Object.freeze({ id: 28, name: "わなぬけスカーフ" }),
  Object.freeze({ id: 29, name: "ばくおんハチマキ" }),
  Object.freeze({ id: 30, name: "ぼうぎょスカーフ" }),
  Object.freeze({ id: 31, name: "スタミナリボン" }),
  Object.freeze({ id: 32, name: "ただのリボン" }),
  Object.freeze({ id: 33, name: "スペシャルリボン" }),
  Object.freeze({ id: 34, name: "キトサンバンダナ" }),
  Object.freeze({ id: 35, name: "みきりハチマキ" }),
  Object.freeze({ id: 36, name: "けいかいメガネ" }),
  Object.freeze({ id: 37, name: "みかわしスカーフ" }),
  Object.freeze({ id: 38, name: "おはじきリボン" }),
  Object.freeze({ id: 39, name: "カーブバンダナ" }),
  Object.freeze({ id: 40, name: "あたらずメガネ" }),
  Object.freeze({ id: 41, name: "ノーコンスコープ" }),
  Object.freeze({ id: 42, name: "ロックオンメガネ" }),
  Object.freeze({ id: 43, name: "ゴンベのハラマキ" }),
  Object.freeze({ id: 44, name: "あしらいスカーフ" }),
  Object.freeze({ id: 45, name: "ノーてんバンダナ" }),
  Object.freeze({ id: 46, name: "ともだちリボン" }),
  Object.freeze({ id: 47, name: "うつくしスカーフ" }),
  Object.freeze({ id: 48, name: "たいようのリボン" }),
  Object.freeze({ id: 49, name: "げっこうのリボン" }),
  Object.freeze({ id: 53, name: "いやしのタネ" }),
  Object.freeze({ id: 54, name: "うたごえのいし" }),
  Object.freeze({ id: 55, name: "オレンのみ" }),
  Object.freeze({ id: 56, name: "オボンのみ" }),
  Object.freeze({ id: 57, name: "めぐすりのタネ" }),
  Object.freeze({ id: 58, name: "ふっかつのタネ" }),
  Object.freeze({ id: 59, name: "めつぶしのタネ" }),
  Object.freeze({ id: 60, name: "ふこうのタネ" }),
  Object.freeze({ id: 61, name: "まどわしのタネ" }),
  Object.freeze({ id: 62, name: "いのちのタネ" }),
  Object.freeze({ id: 63, name: "チーゴのみ" }),
  Object.freeze({ id: 64, name: "くうふくのタネ" }),
  Object.freeze({ id: 65, name: "しゅんそくのタネ" }),
  Object.freeze({ id: 66, name: "モモンのみ" }),
  Object.freeze({ id: 67, name: "クラボのみ" }),
  Object.freeze({ id: 68, name: "ふらふらのタネ" }),
  Object.freeze({ id: 69, name: "すいみんのタネ" }),
  Object.freeze({ id: 71, name: "ワープのタネ" }),
  Object.freeze({ id: 72, name: "ばくれつのタネ" }),
  Object.freeze({ id: 73, name: "カテキン" }),
  Object.freeze({ id: 74, name: "しあわせのタネ" }),
  Object.freeze({ id: 75, name: "カゴのみ" }),
  Object.freeze({ id: 76, name: "しばられのタネ" }),
  Object.freeze({ id: 77, name: "ピーピーマックス" }),
  Object.freeze({ id: 78, name: "タウリン" }),
  Object.freeze({ id: 79, name: "リゾチウム" }),
  Object.freeze({ id: 80, name: "ブロムヘキシン" }),
  Object.freeze({ id: 81, name: "キトサン" }),
  Object.freeze({ id: 82, name: "リンゴ" }),
  Object.freeze({ id: 83, name: "おおきなリンゴ" }),
  Object.freeze({ id: 84, name: "ベトベタフード" }),
  Object.freeze({ id: 85, name: "セカイイチ" }),
  Object.freeze({ id: 86, name: "しろいグミ" }),
  Object.freeze({ id: 87, name: "あかいグミ" }),
  Object.freeze({ id: 88, name: "あおいグミ" }),
  Object.freeze({ id: 89, name: "わかくさグミ" }),
  Object.freeze({ id: 90, name: "きいろグミ" }),
  Object.freeze({ id: 91, name: "とうめいグミ" }),
  Object.freeze({ id: 92, name: "だいだいグミ" }),
  Object.freeze({ id: 93, name: "ももいろグミ" }),
  Object.freeze({ id: 94, name: "ちゃいろグミ" }),
  Object.freeze({ id: 95, name: "そらいろグミ" }),
  Object.freeze({ id: 96, name: "きんいろグミ" }),
  Object.freeze({ id: 97, name: "みどりグミ" }),
  Object.freeze({ id: 98, name: "はいいろグミ" }),
  Object.freeze({ id: 99, name: "むらさきグミ" }),
  Object.freeze({ id: 100, name: "こんいろグミ" }),
  Object.freeze({ id: 101, name: "くろいグミ" }),
  Object.freeze({ id: 102, name: "ぎんいろグミ" }),
  Object.freeze({ id: 103, name: "バナナ" }),
  Object.freeze({ id: 104, name: "イガグリ" }),
  Object.freeze({ id: 106, name: "アップグレード" }),
  Object.freeze({ id: 107, name: "おうじゃのしるし" }),
  Object.freeze({ id: 108, name: "かみなりのいし" }),
  Object.freeze({ id: 109, name: "しんかいのウロコ" }),
  Object.freeze({ id: 110, name: "しんかいのキバ" }),
  Object.freeze({ id: 111, name: "たいようのいし" }),
  Object.freeze({ id: 112, name: "つきのいし" }),
  Object.freeze({ id: 113, name: "ほのおのいし" }),
  Object.freeze({ id: 114, name: "みずのいし" }),
  Object.freeze({ id: 115, name: "メタルコート" }),
  Object.freeze({ id: 116, name: "リーフのいし" }),
  Object.freeze({ id: 117, name: "りゅうのウロコ" }),
  Object.freeze({ id: 118, name: "つうしんケーブル" }),
  Object.freeze({ id: 119, name: "アイスパーツ" }),
  Object.freeze({ id: 120, name: "スチルパーツ" }),
  Object.freeze({ id: 121, name: "ロックパーツ" }),
  Object.freeze({ id: 122, name: "オルゴール" }),
  Object.freeze({ id: 123, name: "カギ" }),
  Object.freeze({ id: 125, name: "きあいパンチ" }),
  Object.freeze({ id: 126, name: "ドラゴンクロー" }),
  Object.freeze({ id: 127, name: "みずのはどう" }),
  Object.freeze({ id: 128, name: "めいそう" }),
  Object.freeze({ id: 129, name: "ほえる" }),
  Object.freeze({ id: 130, name: "どくどく" }),
  Object.freeze({ id: 131, name: "あられだま" }),
  Object.freeze({ id: 132, name: "ビルドアップ" }),
  Object.freeze({ id: 133, name: "タネマシンガン" }),
  Object.freeze({ id: 134, name: "めざめるパワー" }),
  Object.freeze({ id: 135, name: "ひでりだま" }),
  Object.freeze({ id: 136, name: "ちょうはつ" }),
  Object.freeze({ id: 137, name: "れいとうビーム" }),
  Object.freeze({ id: 138, name: "ふぶき" }),
  Object.freeze({ id: 139, name: "はかいこうせん" }),
  Object.freeze({ id: 140, name: "ひかりのかべ" }),
  Object.freeze({ id: 141, name: "まもる" }),
  Object.freeze({ id: 142, name: "あめだま" }),
  Object.freeze({ id: 143, name: "ギガドレイン" }),
  Object.freeze({ id: 144, name: "しんぴのまもり" }),
  Object.freeze({ id: 145, name: "やつあたり" }),
  Object.freeze({ id: 146, name: "ソーラービーム" }),
  Object.freeze({ id: 147, name: "アイアンテール" }),
  Object.freeze({ id: 148, name: "１０まんボルト" }),
  Object.freeze({ id: 149, name: "かみなり" }),
  Object.freeze({ id: 150, name: "じしん" }),
  Object.freeze({ id: 151, name: "おんがえし" }),
  Object.freeze({ id: 152, name: "あなをほる" }),
  Object.freeze({ id: 153, name: "サイコキネシス" }),
  Object.freeze({ id: 154, name: "シャドーボール" }),
  Object.freeze({ id: 155, name: "かわらわり" }),
  Object.freeze({ id: 156, name: "ぶんしんだま" }),
  Object.freeze({ id: 157, name: "リフレクター" }),
  Object.freeze({ id: 158, name: "でんげきは" }),
  Object.freeze({ id: 159, name: "かえんほうしゃ" }),
  Object.freeze({ id: 160, name: "ヘドロばくだん" }),
  Object.freeze({ id: 161, name: "すなのたま" }),
  Object.freeze({ id: 162, name: "だいもんじ" }),
  Object.freeze({ id: 163, name: "がんせきだま" }),
  Object.freeze({ id: 164, name: "つばめがえし" }),
  Object.freeze({ id: 165, name: "いちゃもん" }),
  Object.freeze({ id: 166, name: "からげんき" }),
  Object.freeze({ id: 167, name: "ひみつのちから" }),
  Object.freeze({ id: 168, name: "ねむる" }),
  Object.freeze({ id: 169, name: "メロメロ" }),
  Object.freeze({ id: 170, name: "どろぼう" }),
  Object.freeze({ id: 171, name: "はがねのつばさ" }),
  Object.freeze({ id: 172, name: "スキルスワップ" }),
  Object.freeze({ id: 173, name: "よこどりのたま" }),
  Object.freeze({ id: 174, name: "オーバーヒート" }),
  Object.freeze({ id: 175, name: "すいへいぎり" }),
  Object.freeze({ id: 176, name: "ほりおこし" }),
  Object.freeze({ id: 177, name: "かいてんぎり" }),
  Object.freeze({ id: 178, name: "わなみえのたま" }),
  Object.freeze({ id: 179, name: "ぶんどりのたま" }),
  Object.freeze({ id: 180, name: "はねかえしだま" }),
  Object.freeze({ id: 181, name: "やまごえだま" }),
  Object.freeze({ id: 182, name: "ばしょがえだま" }),
  Object.freeze({ id: 183, name: "ふっとびだま" }),
  Object.freeze({ id: 184, name: "ワープだま" }),
  Object.freeze({ id: 185, name: "へんげのたま" }),
  Object.freeze({ id: 186, name: "どんそくだま" }),
  Object.freeze({ id: 187, name: "しゅんそくだま" }),
  Object.freeze({ id: 188, name: "ひかりのたま" }),
  Object.freeze({ id: 189, name: "しばりだま" }),
  Object.freeze({ id: 190, name: "しのぎのたま" }),
  Object.freeze({ id: 191, name: "とびつきのたま" }),
  Object.freeze({ id: 192, name: "ひきよせのたま" }),
  Object.freeze({ id: 193, name: "せんたくだま" }),
  Object.freeze({ id: 194, name: "ようすみのたま" }),
  Object.freeze({ id: 195, name: "みがわりだま" }),
  Object.freeze({ id: 196, name: "バクスイだま" }),
  Object.freeze({ id: 197, name: "ふらふらだま" }),
  Object.freeze({ id: 198, name: "もろはのたま" }),
  Object.freeze({ id: 199, name: "ちんもくだま" }),
  Object.freeze({ id: 200, name: "あなぬけのたま" }),
  Object.freeze({ id: 201, name: "ものみのたま" }),
  Object.freeze({ id: 202, name: "たんちのたま" }),
  Object.freeze({ id: 203, name: "ひあがりだま" }),
  Object.freeze({ id: 204, name: "わなこわしだま" }),
  Object.freeze({ id: 205, name: "あつまれだま" }),
  Object.freeze({ id: 206, name: "とうめいのたま" }),
  Object.freeze({ id: 207, name: "いちげきのたま" }),
  Object.freeze({ id: 208, name: "しきべつのたま" }),
  Object.freeze({ id: 209, name: "しんくうぎり" }),
  Object.freeze({ id: 210, name: "ふっかつのたま" }),
  Object.freeze({ id: 211, name: "ビックリだま" }),
  Object.freeze({ id: 212, name: "ひれいだま" }),
  Object.freeze({ id: 213, name: "おおべやのたま" }),
  Object.freeze({ id: 214, name: "うめたてのたま" }),
  Object.freeze({ id: 215, name: "わなのたま" }),
  Object.freeze({ id: 216, name: "とりつきだま" }),
  Object.freeze({ id: 217, name: "ものかえだま" }),
  Object.freeze({ id: 218, name: "なげとばしだま" }),
  Object.freeze({ id: 219, name: "つうかのたま" }),
  Object.freeze({ id: 220, name: "ものなげのたま" }),
  Object.freeze({ id: 221, name: "かいだんのたま" }),
  Object.freeze({ id: 222, name: "えんとうだま" }),
  Object.freeze({ id: 223, name: "かんつうだま" }),
  Object.freeze({ id: 224, name: "いあいぎり" }),
  Object.freeze({ id: 225, name: "そらをとぶ" }),
  Object.freeze({ id: 226, name: "なみのり" }),
  Object.freeze({ id: 227, name: "かいりき" }),
  Object.freeze({ id: 228, name: "フラッシュ" }),
  Object.freeze({ id: 229, name: "いわくだき" }),
  Object.freeze({ id: 230, name: "たきのぼり" }),
  Object.freeze({ id: 231, name: "ダイビング" }),
  Object.freeze({ id: 232, name: "れんけつばこ" }),
  Object.freeze({ id: 233, name: "きりかえばこ" }),
  Object.freeze({ id: 234, name: "マニューラぞう" }),
  Object.freeze({ id: 235, name: "マネネぞう" })
]);

const CharCategory = Object.freeze({
  HIRAGANA: 1,
  KATAKANA: 2,
  ALPHABET: 4
});

const CharList = Object.freeze([
  Object.freeze({ id: 0, char: "０", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 1, char: "１", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 2, char: "２", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 3, char: "３", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 4, char: "４", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 5, char: "５", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 6, char: "６", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 7, char: "７", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 8, char: "８", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 9, char: "９", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 10, char: "！", category: CharCategory.HIRAGANA | CharCategory.KATAKANA }),
  Object.freeze({ id: 11, char: "＃", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 12, char: "＄", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 13, char: "％", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 14, char: "＆", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 15, char: "（", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 16, char: "）", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 17, char: "＊", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 18, char: "？", category: CharCategory.HIRAGANA | CharCategory.KATAKANA }),
  Object.freeze({ id: 19, char: "＠", category: CharCategory.HIRAGANA | CharCategory.KATAKANA }),
  Object.freeze({ id: 20, char: "」", category: CharCategory.HIRAGANA | CharCategory.KATAKANA }),
  Object.freeze({ id: 21, char: "「", category: CharCategory.HIRAGANA | CharCategory.KATAKANA }),
  Object.freeze({ id: 22, char: "＋", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 23, char: "＝", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 24, char: "＞", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 25, char: "♀", category: CharCategory.HIRAGANA | CharCategory.KATAKANA }),
  Object.freeze({ id: 26, char: "♂", category: CharCategory.HIRAGANA | CharCategory.KATAKANA }),
  Object.freeze({ id: 27, char: "Ａ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 28, char: "Ｂ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 29, char: "Ｃ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 30, char: "Ｄ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 31, char: "Ｅ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 32, char: "Ｆ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 33, char: "Ｇ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 34, char: "Ｈ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 35, char: "Ｊ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 36, char: "Ｋ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 37, char: "Ｌ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 38, char: "Ｍ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 39, char: "Ｎ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 40, char: "Ｐ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 41, char: "Ｑ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 42, char: "Ｒ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 43, char: "Ｓ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 44, char: "Ｔ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 45, char: "Ｕ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 46, char: "Ｖ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 47, char: "Ｗ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 48, char: "Ｘ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 49, char: "Ｙ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 50, char: "Ｚ", category: CharCategory.ALPHABET }),
  Object.freeze({ id: 51, char: "あ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 52, char: "ア", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 53, char: "い", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 54, char: "イ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 55, char: "ウ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 56, char: "え", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 57, char: "エ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 58, char: "お", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 59, char: "オ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 60, char: "か", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 61, char: "カ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 62, char: "き", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 63, char: "キ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 64, char: "け", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 65, char: "ケ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 66, char: "こ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 67, char: "コ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 68, char: "さ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 69, char: "サ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 70, char: "す", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 71, char: "ス", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 72, char: "せ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 73, char: "セ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 74, char: "そ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 75, char: "た", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 76, char: "タ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 77, char: "ち", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 78, char: "チ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 79, char: "つ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 80, char: "て", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 81, char: "テ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 82, char: "と", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 83, char: "ト", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 84, char: "な", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 85, char: "ナ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 86, char: "に", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 87, char: "ニ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 88, char: "ぬ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 89, char: "ヌ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 90, char: "ね", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 91, char: "ネ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 92, char: "の", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 93, char: "ノ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 94, char: "は", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 95, char: "ハ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 96, char: "ひ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 97, char: "ヒ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 98, char: "ふ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 99, char: "フ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 100, char: "ほ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 101, char: "ホ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 102, char: "ま", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 103, char: "マ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 104, char: "み", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 105, char: "ミ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 106, char: "む", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 107, char: "ム", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 108, char: "め", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 109, char: "メ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 110, char: "も", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 111, char: "モ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 112, char: "や", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 113, char: "ヤ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 114, char: "ゆ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 115, char: "ユ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 116, char: "よ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 117, char: "ヨ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 118, char: "ら", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 119, char: "る", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 120, char: "ル", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 121, char: "れ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 122, char: "ろ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 123, char: "ロ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 124, char: "わ", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 125, char: "を", category: CharCategory.HIRAGANA }),
  Object.freeze({ id: 126, char: "ヲ", category: CharCategory.KATAKANA }),
  Object.freeze({ id: 127, char: "ん", category: CharCategory.HIRAGANA })
]);

const sortedItemList = ItemList.toSorted((a, b) => a.name.localeCompare(b.name, "ja"));

const requestSelect = document.getElementById("request-select");
const rewardSelect = document.getElementById("reward-select");

sortedItemList.forEach(item => {
  const requestOption = document.createElement("option");
  requestOption.value = item.id;
  requestOption.textContent = item.name;
  requestSelect.appendChild(requestOption);

  const rewardOption = document.createElement("option");
  rewardOption.value = item.id;
  rewardOption.textContent = item.name;
  rewardSelect.appendChild(rewardOption);
});

const savedRequestSelect = localStorage.getItem("requestSelect");
if (savedRequestSelect !== null) {
  requestSelect.value = savedRequestSelect;
}

const savedRewardSelect = localStorage.getItem("rewardSelect");
if (savedRewardSelect !== null) {
  rewardSelect.value = savedRewardSelect;
}

requestSelect.addEventListener("change", () => {
  localStorage.setItem("requestSelect", requestSelect.value);
});

rewardSelect.addEventListener("change", () => {
  localStorage.setItem("rewardSelect", rewardSelect.value);
});

const generate = document.getElementById("generate");
generate.addEventListener("click", async () => {
  if (generate.disabled) {
    return;
  }

  generate.textContent = "作成中...";
  generate.disabled = true;

  await new Promise(resolve => setTimeout(resolve, 0));

  try {
    generateOptimizedPassword();
  } catch (error) {
    console.error("作成に失敗しました:", error);
  } finally {
    generate.textContent = "作成";
    generate.disabled = false;
  }
});

document.getElementById("log").value = "";

function hasFlag(value, flag) {
  return (value & flag) === flag;
}

function formatTimeStamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

function resizeLog() {
  const log = document.getElementById("log");
  if (!log) {
    return;
  }

  const style = getComputedStyle(log);

  const lineHeight = parseFloat(style.lineHeight);
  const lineCount = log.value.split("\n").length;

  const paddingHeight =
    parseFloat(style.paddingTop) +
    parseFloat(style.paddingBottom);

  const borderHeight =
    parseFloat(style.borderTopWidth) +
    parseFloat(style.borderBottomWidth);

  log.style.height = `${Math.ceil(lineCount * lineHeight + paddingHeight + borderHeight)}px`;

  // スマホでは幅は変更しない
  if (window.innerWidth <= 480) {
    return;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return;
  }

  context.font = style.font;
  const lines = log.value.split("\n");
  const maxWidth = Math.max(...lines.map(line => context.measureText(line).width));

  const paddingWidth =
    parseFloat(style.paddingLeft) +
    parseFloat(style.paddingRight);
  const borderWidth =
    parseFloat(style.borderLeftWidth) +
    parseFloat(style.borderRightWidth);
  const scrollbarWidth = 20;

  log.style.width = `${Math.ceil(maxWidth + paddingWidth + borderWidth + scrollbarWidth)}px`;
}

function generatePassword({
  requestTypeId,
  dungeonId,
  floor,
  sentenceId,
  mailId,
  requestPokemonId,
  rewardItemId,
  friendAreaId = 0,
  targetPokemonId,
  rewardTypeId,
  requestItemId,
  specialMissonFlags = 0
}) {
  const bytes = new Uint8Array(12);
  bytes[0] = ((requestItemId << 4) + (specialMissonFlags << 7)) & 0xff;
  bytes[1] = ((requestPokemonId << 3) + (specialMissonFlags >> 1)) & 0xff;
  bytes[2] = ((targetPokemonId << 4) + (requestPokemonId >> 5)) & 0xff;
  bytes[3] = ((requestItemId << 5) + (targetPokemonId >> 4)) & 0xff;
  bytes[4] = ((rewardTypeId << 5) + (requestItemId >> 3)) & 0xff;
  bytes[5] = ((rewardItemId << 1) + (rewardTypeId >> 3)) & 0xff;
  bytes[6] = ((sentenceId << 7) + (friendAreaId << 1) + (rewardItemId >> 7)) & 0xff;
  bytes[7] = ((mailId << 7) + (sentenceId >> 1)) & 0xff;
  bytes[8] = (mailId >> 1) & 0xff;
  bytes[9] = ((dungeonId << 7) + (mailId >> 9)) & 0xff;
  bytes[10] = ((floor << 6) + (dungeonId >> 1)) & 0xff;
  bytes[11] = (floor >> 2) & 0xff;
  let checksum = bytes.reduce((sum, value) => sum + value, 0);
  checksum += 110;
  checksum &= 0xff;

  const passNums = Array(17);
  passNums[0] = (rewardItemId >> 7 | friendAreaId << 1) & 0x7f;
  passNums[1] = (mailId >> 6) & 0x7f;
  passNums[2] = (requestTypeId >> 2 | specialMissonFlags << 1 | requestPokemonId << 5) & 0x7f;
  passNums[3] = (floor >> 4) & 0x7f;
  passNums[4] = (targetPokemonId >> 7 | requestItemId << 2) & 0x7f;
  passNums[5] = 0;
  passNums[6] = (checksum >> 7 | requestTypeId << 5 | 0xa) & 0x7f;
  passNums[7] = rewardItemId & 0x7f;
  passNums[8] = targetPokemonId & 0x7f;
  passNums[9] = checksum & 0x7F;
  passNums[10] = (requestPokemonId >> 2) & 0x7f;
  passNums[11] = sentenceId & 0x7f;
  passNums[12] = (dungeonId >> 4 | floor << 3) & 0x7f;
  passNums[13] = 0;
  passNums[14] = (requestItemId >> 5 | rewardTypeId << 3) & 0x7f;
  passNums[15] = (sentenceId >> 7 | mailId << 1) & 0x7f;
  passNums[16] = (mailId >> 13 | dungeonId << 3) & 0x7f;

  const password = passNums.map((num) => {
    const item = CharList.find(item => item.id === num);
    if (!item) {
      throw new Error(`未定義の文字IDです(${num})`);
    }
    return item.char;
  }).join("");
  return password;
}

function generateOptimizedPassword() {
  const log = document.getElementById("log");
  const startTimeStamp = formatTimeStamp(new Date());
  log.value = `開始時刻: ${startTimeStamp}\n`;

  log.value += `要求アイテム: ${requestSelect.options[requestSelect.selectedIndex].text}(ID: ${requestSelect.value})\n`;
  log.value += `報酬アイテム: ${rewardSelect.options[rewardSelect.selectedIndex].text}(ID: ${rewardSelect.value})\n`;

  const passwordList = [];
  let idHistory = JSON.parse(localStorage.getItem("idHistory")) ?? [];

  // 1個目はすぐ助けてそのまま脱出できるように1階に、残りは難しさ☆の階のうち13文字目をその前後の文字と同じCharCategory.ALPHABETにしてカテゴリー切り替えをしないで済むような階にする。
  const floors = [1, 80, 81, 83, 84, 85, 96, 97];

  floors.forEach((floor, index) => {
    const helpClient = 0;
    const bringBackRequestItem = 3;
    // 依頼タイプは1個目は依頼主を助ける、他は指定アイテムを持ち帰る
    const requestTypeId = floor === 1 ? helpClient : bringBackRequestItem;
    // ダンジョンはしあわせのとう
    const dungeonId = 58;
    // 依頼ポケモン、対象ポケモンはフシギダネ
    const pokemonId = 1;
    const rewardItemId = rewardSelect.value;
    // 報酬タイプはアイテム＋その他×2
    const rewardTypeId = 8;
    // 要求アイテムは1個目は0x40
    const requestItemId = floor === 1 ? 0x40 : requestSelect.value;

    const compromiseTimes = 1000;
    const closeTimes = 10000;
    let found = false;
    for (let i = 0; i < closeTimes; i++) {
      let mailId = Math.floor(Math.random() * 0xffff);
      let sentenceId = 0;

      // passNums[1]の最上位ビットを0にしてCharCategory.ALPHABETになりやすくする。
      mailId &= 0xefff;

      // 妥協回数になるまで条件をきつくする。
      // password[15]をpassword[14]と同じにする。
      if (i < compromiseTimes) {
        mailId &= 0xffc0;
        mailId |= (rewardTypeId << 2 | requestItemId >> 6);
        sentenceId = (requestItemId >> 5 & 1) << 7;
      }

      if (idHistory.includes(mailId)) {
        continue;
      }

      const password = generatePassword({
        requestTypeId: requestTypeId,
        dungeonId: dungeonId,
        floor: floor,
        sentenceId: sentenceId,
        mailId: mailId,
        requestPokemonId: pokemonId,
        rewardItemId: rewardItemId,
        targetPokemonId: pokemonId,
        rewardTypeId: rewardTypeId,
        requestItemId: requestItemId
      });

      const categories = Array.from(password, passChar => CharList.find(item => item.char === passChar).category);

      // categories[1]とcategories[9]の前後がCharCategory.ALPHABETなので同じにする。
      if (categories[1] !== CharCategory.ALPHABET || categories[9] !== CharCategory.ALPHABET) {
        continue;
      }

      // Password[6]の調整。
      // フロアが1階、つまり依頼タイプが依頼主を助けるの場合、
      // "！", "＃"のどちらか、つまり全CharCategoryに対応できるので同じにする。
      if (floor === 1) {
        if (!hasFlag(categories[6], categories[7])) {
          continue;
        }
      }
      // フロアが1階以外、つまり依頼タイプが指定アイテムを持ち帰るの場合、
      // "む", "ム"のどちらか、つまりCharCategory.ALPHABETなら'む'に固定、CharCategory.HIRAGANAかCharCategory.KATAKANAなら同じにする。
      else {
        if (categories[7] === CharCategory.ALPHABET && password[6] !== "む") {
          continue;
        }
        if (categories[7] !== CharCategory.ALPHABET && !hasFlag(categories[6], categories[7])) {
          continue;
        }
      }

      // categories[16]をcategories[14]と同じにする。
      const ch16CandidateStart = dungeonId << 3 & 0x7f;
      const ch16CandidateEnd = ch16CandidateStart + 0b111;
      const ch16Candidates = CharList
        .slice(ch16CandidateStart, ch16CandidateEnd)
        .filter(ch => hasFlag(ch.category, categories[14]))
        .map(ch => ch.char);
      if (ch16Candidates.length > 2 && !ch16Candidates.includes(password[16])
      ) {
        continue;
      }

      // ここまでcontinueしなければリストに追加する。
      found = true;
      passwordList.push(password);
      idHistory.push(mailId);
      while (idHistory.length > 16) {
        idHistory.shift();
      }
      log.value += `${index + 1}個目: 試行回数: ${i + 1}回, メールID: ${mailId}\n`

      break;
    }

    if (!found) {
      log.value += `${index + 1}個目: 試行回数: ${closeTimes}回（見つかりませんでした）\n`;
    }
  });

  localStorage.setItem("idHistory", JSON.stringify(idHistory));

  const tbody = document.getElementById("result-tbody");
  tbody.innerHTML = "";
  passwordList.forEach(password => {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.textContent = `${password.slice(0, 5)}　${password.slice(5, 12)}　${password.slice(12)}`;
    row.appendChild(cell);
    tbody.appendChild(row);
  });
  selectRow(tbody.querySelector("tr"));

  const endTimeStamp = formatTimeStamp(new Date());
  log.value += `終了時刻: ${endTimeStamp}\n`;
  resizeLog();
}

// パスワード表の選択
const tbody = document.getElementById("result-tbody");

function selectRow(row) {
  if (!row) return;
  tbody.querySelector(".selected")?.classList.remove("selected");
  row.classList.add("selected");
}

tbody.addEventListener("click", (event) => {
  const row = event.target.closest("tr");
  if (row && tbody.contains(row)) {
    selectRow(row);
  }
});

document.addEventListener("keydown", (event) => {
  // 入力欄などを操作中は邪魔しない
  if (event.target instanceof Element &&
    event.target.closest("input, textarea, select, [contenteditable='true']")) {
    return;
  }

  if (event.key === "Enter") {
    event.preventDefault();
    generate.click();
    return;
  }

  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    const rows = [...tbody.querySelectorAll("tr")];
    if (rows.length === 0) {
      return;
    }

    event.preventDefault();

    const currentIndex = rows.findIndex(
      (row) => row.classList.contains("selected")
    );

    if (currentIndex === -1) {
      selectRow(rows[0]);
      return;
    }

    let nextIndex = currentIndex;
    if (event.key === "ArrowUp") {
      nextIndex = Math.max(0, currentIndex - 1);
    } else {
      nextIndex = Math.min(rows.length - 1, currentIndex + 1);
    }
    selectRow(rows[nextIndex]);
  }
});

// ダークモード
const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").match ? "dark" : "light";
const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : systemTheme;

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeToggle.checked = theme === "dark";
}

applyTheme(initialTheme);

themeToggle.addEventListener("change", () => {
  const theme = themeToggle.checked ? "dark" : "light";
  applyTheme(theme);
  localStorage.setItem("theme", theme);
});
