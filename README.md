# S-Class LP

S-Class の静的ランディングページです。

## 主なファイル

- `index.html`: トップページ本体
- `privacy.html`: プライバシーポリシー
- `tokutei.html`: 特定商取引法に基づく表記
- `analytics.js`: Google Analytics / gtag の読み込み設定
- `script.js`: FAQ 開閉、スクロール時の表示アニメーション
- `*.css`: セクションごとのスタイル
- `image/`: 画像アセット

## Google Analytics

GA4 の計測 ID は `analytics.js` の `GA_MEASUREMENT_ID` で管理しています。
ID を変更する場合は、このファイルだけ更新してください。

```js
const GA_MEASUREMENT_ID = 'G-QF6FXNR4BR';
```

新しい HTML ページを追加した場合は、`<head>` 内に以下を追加すると計測されます。

```html
<script src="analytics.js"></script>
```

## ローカル確認

HTML をブラウザで直接開いて確認できます。
ローカルサーバーで確認する場合は、このディレクトリで以下を実行してください。

```bash
python3 -m http.server 8000
```

その後、`http://localhost:8000/` を開きます。
