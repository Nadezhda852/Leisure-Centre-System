const axios=require('axios');

exports.homeRoutes=(req,res)=>{
    axios.get('http://localhost:3000/api/athlets')
    .then (function(response){
        res.render('index',{athlets:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_athlet=(req, res)=>{
    res.render('add_athlet');
}

exports.update_athlet=(req, res)=>{
    axios.get('http://localhost:3000/api/athlets',{params:{id:req.query.id}})
    .then(function(athletdata){
       res.render("update_athlet",{athlet:athletdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}