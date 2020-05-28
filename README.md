# TETRIS
フロントエンド研修課題

## 概要
### 使用したもの
* html
* js
* jquery

### 対応ブラウザ
* safari
* chrome

## プレイ方法
1. リポジトリをクローン
2. index.htmlを開く

### 基本操作方法
キーボードの十字キーを使用します。
⬆️ : ブロックの回転

⬅️ : ブロックを左に移動

➡️ : ブロックを右に移動

⬇️ : ブロックを下に移動

ESC : 一時停止

## その他
### chromeにてオーディオ関連のバグがあります。

index.htmlを開いた時に鳴るBGMが制限されてます。

※ ESCを押して1度一時停止をさせるとBGMが鳴るようになります。
```
Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
```
 [Node.jsにおけるWebアプリで、音が鳴らないので対処(Chromeでの制限が原因) - Qiita](https://qiita.com/A-Kouki/items/40020f7ef30a4e3b6d79)
<br>


### ネイティブ対応の部分で音が出ないバグがあります。

#10antz
