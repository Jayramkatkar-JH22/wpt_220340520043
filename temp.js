const mysql = require('mysql2');

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'test',
	port:3306
});
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.static("abc"));


const bodyParser = require('body-parser');






app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not



var result;

app.post('/poc1', function (req, res) {
	
		console.log("reading input " + req.body.v1 +  "  second " + req.body.v2)
		
    	var xyz ={ v1:37, v2:35};
        res.send(xyz);
    });


app.get('/abc/add', function (error, res) {
    let input ={ bookid: req.query.bid,bookname: req.query.bname,price: req.query.bprc };

	con.query('insert into book(bookid,bookname,price)values(?,?,?)',[input.bookid,input.bookname,input.price]),
	(error,insertstatus)=>{
		if (error){
			confirm.log(error)
		}
		else if(insertstatus.affectedrows>0){
			output=true;
		}
		res.send(output);
	}
	}
	);
        // console.log("reading input " + req.query.xyz);
		
    	// var xyz ={ v1:37, v2:35};

		// res.send(xyz);

		// });


app.get('/getall', function (error, res) {	
	con.query('select * from book',[],(error,rows)=>{
	res.send(rows);
}
);
	

});

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});