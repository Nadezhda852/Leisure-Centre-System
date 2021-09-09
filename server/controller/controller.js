var Athletdb=require('../model/model');

// create and save new athlet
exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Please, enter a content"});
        return; 
    }

    //new athlet
    const athlet=new Athletdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save athlet in the db
    athlet
    .save(athlet)
    .then(data=>{
        res.redirect('/add-athlet')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message ||"There is an error while trying to create a new athlet"
        });
    });
}

// retrive and return a single athlet & retrive and return all athlets
exports.find=(req, res)=>{

   if(req.query.id){
       const id=req.query.id;
         
       Athletdb.findById(id)
       .then(data=>{
           if(!data){
               res.status(404).send({message:"Can not find an athlet with id"+ id})
           }else{
               res.send(data)
           }
       })
        .catch(err=>{
            res.status(500).send({message: "There is an error retrieving an athlet with id" +id})
        })         
   }else{
    Athletdb.find()
    .then(athlet=>{
        res.send(athlet)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "There is an error while retriving athlet's information"})
    })
}

   }


 

//update an existing athlet
exports.update=(req,res)=>{
    if(!req.body){
    return res
    .status(400)
    .send({message: "Please, input datato update"})
}

const id=req.params.id; 

Athletdb.findByIdAndUpdate(id,req.body)
.then(data=>{
    if(!data){
        res.status(404).send({message:`Can't update athlet with $(id).Maybe athlet not found`})
    }else{
        res.send(data)
    }
})
.catch(err=>{
    res.status(500).send({message: "Error update athlet's information"})
})
}

//delete an existing athlet
exports.delete=(req,res)=>{
    const id = req.params.id;

    Athletdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: `Can't delete with id${id}.Maybe id is incorrect`})
        }else{
            res.send({
                message:"Athlet was deleted successfully!"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Couldn't delete Athlet with id=" +id 
        });
    });
}