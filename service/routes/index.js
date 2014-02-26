
/*
 * GET home page.
 */
 var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'radityabp',
	});
var databasename = "edc_service.";
 

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

//usage GET (idkartu = nomorkartu)
exports.getprofile = function(req,res){
	//var customerid = req.query.customerid;
	var idkartu = req.query.idkartu;
	var query = "select * from "+databasename+"view_profil where idkartu = " +idkartu ;
	var json = {};
	connection.query(query, function(err, rows, fields) {
		if (err){
			json.status = -1;
			json.error = "gagal mengambil data profil";
			json.detail = err;
			res.send(JSON.stringify(json));
		}
		else{
			if(rows.length == 0){
				json.status = 0;
				json.error = "data customer dengan id = "+customerid + "tidak ada";
				res.send(JSON.stringify(json));
				//json.detail = err;
			}else{
				customer = rows[0];
				json.status = 1;
				json.data = customer;
				res.send(JSON.stringify(json));
			}
		}
	});
};

//usage POST (customerid = idcustomer dari profile, debet =  jumlah deposit,pin = kode pin)
exports.deposit = function(req,res){
	var customerid = req.body.customerid;
	var debet = req.body.deposit;
	var pin = req.body.pin;
	var status = 1;
	var json = {};
	var _query = "INSERT INTO "+databasename+"transaksi(idcustomer,debet,status,keterangan) VALUES("+customerid+",'"+deposit+"',"+status+",'deposit')";
		connection.query(_query,function(err,results){
			if(err){
				json.status = -1;
				json.error = "gagal saat malakukan penyimpanan (error 1)";
				json.detail = err;
				
			}
			else
			{
				json.status = 1;
				
			}
			res.send(JSON.stringify(json));
		});
};

//usage POST (customerid = idcustomer dari profile, nilai =  nilai transaksi,tipe = 'D' / 'K',ket = keterangan transaksi,pin = kode pin)
exports.inputtransaksi = function(req,res){
	var customerid = req.body.customerid;
	//var idkartu = req.body.idkartu;
	var nilai = req.body.nilai;
	var tipe = req.body.tipe;
	var ket = req.body.keterangan;
	var pin = req.body.pin;
	var status = 1;
	var json = {};
	var _query = "";
	var debetorkredit = "";
	if(tipe.toUpperCase() == 'D'){
		debetorkredit = 'debet';
	}else{
		debetorkredit = 'kredit';
	}
	_query = "INSERT INTO "+databasename+"transaksi(idcustomer,"+debetorkredit+",status,keterangan) VALUES("+customerid+","+nilai+","+status+",'"+ket+"')";
	
		connection.query(_query,function(err,results){
			if(err){
				json.status = -1;
				json.error = "gagal saat malakukan penyimpanan (error 1)";
				json.detail = err;
				
			}
			else
			{
				json.status = 1;
				
			}
			res.send(JSON.stringify(json));
		});
};

