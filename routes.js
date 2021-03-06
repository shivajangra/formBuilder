var express = require('express')
var router = express.Router();
const db = require('./db_connection');
const path = require('path');

router.post('/addFieldata',function(req, res){ 
    let {template_name, ...data} = req.body;
    if(!template_name){
        res.status(200).send({
            message : "Template not Verified",
            status: 400
        })   
    }else{
    let fields = '';
    let values = '';
    Object.keys(data).forEach(dt => {
        fields += dt+",";
        values += "'"+data[dt]+"',";
    })

    var sql = "INSERT INTO "+template_name+" ("+fields.substring(0, fields.length - 1)+") VALUES ("+values.substring(0, values.length - 1)+")"; 
    db.query(sql, function (err, result) {  
        if (err){
            res.status(200).send({
                message : "Error! Data not saved.",
                status: 400
            })
        }
        else{
            // res.sendFile(path.join(__dirname + '/public/index.html'));
            res.writeHead(301,
                {Location: 'http://localhost:3000/templatelist'}
              );
              res.end();
            // res.status(200).send({
            //     message : "Successfully Done",
            //     status: 200
            // })
        }
    });
   }
});

router.post('/addTemplates',function(req, res){ 
    
    var template_name = req.body.template_name; 
    console.log(template_name);
    let is_table_exist = "SHOW TABLES LIKE '"+template_name+"'";
    db.query(is_table_exist, function (err, result) { 
        if(result.length == 0){
        var fields = req.body.fields;
        var all_columns = '';
        fields.forEach(element => { all_columns += element+" VARCHAR(2000), "; });
        let create_table = "CREATE TABLE "+template_name+" (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, "+all_columns+"reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";
        db.query(create_table, function (err, result) { 
            if(err){
                res.status(200).send({
                    message : "something went wrong! while creating table. You can try after deleting this table",
                    status: 400
                })
            }else{
                var is_exist = "Select * from templates where template_name = '"+template_name+"'";
                db.query(is_exist, function (err, result) {  
                    if(err){
                            res.status(200).send({
                                message : "error! something went wrong.",
                                status: 400
                            })
                    }else if(result.length == 0){
                            let template = JSON.stringify(req.body.template);
                            var sql = "INSERT INTO templates (template, template_name) VALUES ("+template+",'"+template_name+"')";
                            db.query(sql, function (err, result) {  
                                if (err){
                                    res.status(200).send({
                                            success: false,
                                            status: 400,
                                            error : err
                                        })
                                }else{
                                    res.status(200).send({
                                            success: true,
                                            message: "Successfully Done",
                                            status: 200
                                        })
                                }
                            
                            });
                    }else{
                        res.status(200).send({ 
                            status: 400,
                            message: 'we already has a page with this title'
                        })
                    }
                });
            }
        })
        }else{
            res.status(200).send({
                message : "error! something went wrong.",
                status: 400
            })
        }
    });

});

router.get('/getTemplateDetail/:id',function(req, res){
    var sql = "Select * from templates where id = "+req.params.id;
    db.query(sql, function (err, result) {  
        if (err){
            res.status(200).send({
                    success: false,
                    status: 400
                })
        }else{
            res.status(200).send({
                    success: true,
                    status: 200,
                    result :result.length>0?result[0]:result
                })
        }
     
    });  
});

router.get('/getTemplates',function(req, res){

    var sql = "Select * from templates";
    db.query(sql, function (err, result) {  
        if (err){
            res.status(200).send({
                    success: false,
                    status: 400
                })
        }else{
            res.status(200).send({
                    success: true,
                    status: 200,
                    result :result
                })
        }
     
    });  
});

module.exports = router