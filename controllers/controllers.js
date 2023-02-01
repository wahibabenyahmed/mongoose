const ContactSchema = require('../model/contact')


exports.GetContact = async(req,res)=>{


try{
const getContact = await ContactSchema.find({},{id:true,name:true});
res.status(200).json({message:"this is all contact",getContact});
}catch(err){
res.status(500).send("can not get the contacts")
}}


exports.CreatContact = async(req,res)=>{
try{

const addUser = await new ContactSchema(req.body)

addUser.save();
res.status(200).json({'success':true,'result':addUser})
}catch(err){
    res.status(500).json("cannot add new  contacts")
}

}
exports.userUpdate=async(req,res)=>{
    try{
        const {id} =req.params;
       
        const updated = await ContactSchema.findByIdAndUpdate(id, {$set:{...req.body}});
        res.status(200).json({'sucess':true,updated})
    }
    catch(err){
        res.status(500).json({'cannot update this user':true})
    }
    }
    

    exports.userDelete=async(req,res)=>{
        try{
            const {id} =req.params;
           
            const deletee = await ContactSchema.findByIdAndRemove(id);
            res.status(200).json({'sucess':true,deletee})
        }
        catch(err){
            res.status(500).json({'cannot delete this user':true})
        }
        }
        exports.userDeleteall=async(req,res)=>{
            try{
                const {id} =req.params;
               
                const deletee = await ContactSchema.deleteMany();
                res.status(200).json({'sucess':true,deletee})
            }
            catch(err){
                res.status(500).json({'cannot delete this user':true})
            }
            }


