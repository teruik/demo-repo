# ベースイメージの取得
FROM registry.redhat.io/ubi8:latest 

# node.jsの利用に必要なパッケージ（ランタイム）をインストール
RUN dnf module install nodejs -y
RUN npm install express ejs --save


# コンテナ起動した後に遷移させる作業ディレクトリの設定
WORKDIR /usr/src/app

# ホストで作成済みのnode.jsアプリケーションの動作に必要なソースコード（一部）をコンテナ内の作業ディレクトリに転送

# 【改修】ホストで作成済みのnode.jsアプリケーションの動作に必要なソースコード全てをコンテナ内の作業ディレクトリに転送
#COPY . .

# コンテナを立ち上げた後に発動して欲しいコマンドを記載。
# コマンド毎に区切って記載しないといけない。要は`node app.js`というコマンドを打ちたい。
CMD ["npm", "start"] 


