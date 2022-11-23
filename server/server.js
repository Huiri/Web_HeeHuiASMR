// json-server --watch data.json --port 3001

// 아랫부분 적당한 위치에 추가
const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 3002;
const cors = require('cors');
const bodyParser = require("body-parser");

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
// const db = mysql.createPool({
//     host : "34.170.13.40",
//     user : "root", //mysql의 id
//     password : "12345678", //mysql의 password
//     database : "ASMR", //사용할 데이터베이스
// });

const db = mysql.createPool({
    host : "localhost",
    user : "root", //mysql의 id
    password : "moon0706", //mysql의 password
    database : "asmr", //사용할 데이터베이스
    dateStrings: "date",
});

app.get('/', (req, res) => {
  res.send('Server Response Success');
});

app.get("/user", (req, res) => {
  // const myDate = moment(data.myTime.format('YYYY/MM/DD HH:MM:SS')).toISOString();
  // require('moment')().format('YYYY-MM-DD HH:mm:ss');
  // const isoDateString = datePickerDate.toISOString();
  const sqlQuery = "INSERT INTO USERS (email, password, name, imageUrl) VALUES ('asdf', 'qwer', 'q','qwe')";
  db.query(sqlQuery, (err, result) => {
    if(err){
      console.log(err);
    }
    res.send("success!");
  });
});

app.get("/getcomment", (req, res) => {
  const sqlQuery = "SELECT * FROM comment;";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    res.send(result);
  });
});

app.post("/addcomment", (req, res) => {

  const text = req.body.text;
  const video_id = req.body.video_id;
  const user_idx = req.body.user_idx;
  const date = req.body.date;
  const isdeleted = req.body.isdeleted;

  console.log(text, video_id, user_idx, date, isdeleted);
  // const sqlQuery = "INSERT into comment(comment, video_id,user_idx, date, isdeleted) values ('wjh','bhj', 345,'1999-06-01', 0);";
  const sqlQuery = "INSERT into comment(comment, video_id,user_idx, date, isdeleted) VALUES (?, ?, ?,?, ?);";
  db.query(sqlQuery, [text, video_id, user_idx, date, isdeleted], (err, result) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
    } else{
      res.send("success!");
    }
  });
});

app.post("/commentupdate", (req, res) => {

  const newText = req.body.newText;
  const date = req.body.date;
  const isdeleted = req.body.isdeleted;
  const id = req.body.comment_idx;

  console.log(newText, date, isdeleted);
  const sqlQuery = "UPDATE comment SET `comment`=?, date=? WHERE comment_idx=?;";
  db.query(sqlQuery, [newText, date, id], (err, result) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
    } else{
      res.send("success!");
    }
  });
});

app.post("/commentdelete", (req, res) => {
  const id = req.body.comment_idx;

  const sqlQuery = "DELETE FROM comment WHERE comment_idx IN (?)";
  db.query(sqlQuery, [id], (err, result) => {
    if(err) {
      console.log(err);

    }
    res.send(result);
  });
});
app.get("/like", (req, res) => {
  // const myDate = moment(data.myTime.format('YYYY/MM/DD HH:MM:SS')).toISOString();
  // require('moment')().format('YYYY-MM-DD HH:mm:ss');
  const sqlQuery = "INSERT INTO LIKE (user_idx, idLiked, date, video_id) VALUES ('asdf', 'qwer', 'q','qwe')";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    res.send("success!");
  });
});
app.get("/video", (req, res) => {
  const sqlQuery = "SELECT * FROM VIDEO;";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    res.send(result);
  });
});
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});