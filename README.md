# mainは使いません
- ご自身のGitlabアカウントにフォークしてお使いください
- ブランチについては以下の様になっています。
    - JSON： ローカルホスト名をJSON文字列で返却するだけの無機質なアプリ
        - Dockerfileを使ってイメージビルドしてください
    - HTML： 同じくローカルホスト名を取得しますが、ViewをHTMLで作ります
        - view/index.ejsのコメントアウトを削除するとホスト名に赤い色が付きます
        - Source to Image (S2I) によってデプロイしてください。
        - UBIはNode.jsを用いて下さい。

# Routeのクッキー解除、ラウンドロビンのロードバランスを実現するアノテーション
```  
    annotations:
        haproxy.router.openshift.io/balance: roundrobin
        haproxy.router.openshift.io/disable_cookies: 'true'
```
- 詳細は[こちら](https://access.redhat.com/documentation/ja-jp/openshift_container_platform/3.11/html/architecture/load-balancing)

# 本ハンズオンアプリを作るのに参考にしたChatGPTとの対話ログ
-   ご興味あれば[こちら](https://chat.openai.com/share/08830155-9c0b-49da-96b7-95e227e1554f)ごらんください