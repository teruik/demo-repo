# mainは使いません
- ブランチについては以下の様になっています。
    - JSON： ローカルホスト名をJSON文字列で返却するだけの無機質なアプリ
        - Dockerfileを使ってデプロイしてください
        - ちなみにビルド済みコンテナイメージ(x86アーキテクチャ)は以下に入れてあります。
            - quay.io/rh-ee-moomura/nodejs-app-json:latest
    - HTML： 同じくローカルホスト名を取得しますが、ViewをHTMLで作ります
        - view/index.ejsのコメントアウトを削除するとホスト名に赤い色が付きます
        - Source to Image (S2I) によってデプロイしてください。
        - UBIはNode.jsを用いて下さい。

# 本ハンズオンアプリを作るのに参考にしたChatGPTとの対話ログ
-   ご興味あればごらんください
    - https://chat.openai.com/share/08830155-9c0b-49da-96b7-95e227e1554f