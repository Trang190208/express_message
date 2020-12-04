

//モジュール 読み込み
const express = require('express');

//サンプル Product モデル モジュール読み込み

//サーバ作成
const app = express();

// URLエンコードされたデータを解析する
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ver 3.x
//app.use(bodyParser.urlencoded());

// ミドルウェア関数
// 全てのリクエスト
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    //CROS設定: 全てのドメインに対して許可 
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //次の処理
    next();
});
app.post('/',(req,res) => {
    console.log('post');

    let message = req.body.message;
    let result = {
        'message' : message,
    };
    res.send(result);
})
app.get('/',(req,res) => {
    let id = req.query.id;
    console.log(id);
});


app.listen(3000)