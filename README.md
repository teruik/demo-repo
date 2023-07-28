# mainは使いません
- ブランチについては以下の様になっています。
    - JSON： ローカルホスト名をJSON文字列で返却するだけの無機質なアプリ
        - Dockerfileを使ってデプロイしてください
    - HTML： 同じくローカルホスト名を取得しますが、ViewをHTMLで作ります
        - view/index.ejsのコメントアウトを削除するとホスト名に赤い色が付きます
        - Source to Image (S2I) によってデプロイしてください。
        - UBIはNode.jsを用いて下さい。