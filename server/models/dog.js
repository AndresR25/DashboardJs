const mongoose = require( 'mongoose' );

const DogSchema = new mongoose.Schema({
    dogName : {
        type : String,
        required : true,
        minlength : 1,
        maxlength : 50
    },
    dogInformation : {
        type : String,
        required : true,
        minlength : 1,
        maxlength : 1000
    },
    dogId : {
        type : Number,
        required : true,
        unique : true
    }
});

const Dog = mongoose.model( 'dogs', DogSchema );

const DogModel = {
    insertDog : function( newUser ){
        return Dog.create( newUser );
    },
    getAllDogs : function(){
        return Dog.find();
    },
    getDogById : function( dogId ){
        return Dog.findOne({ dogId : dogId });
    },
    updateDogInfo : function(dogId, newDog){
        return Dog.updateOne({ dogId : dogId }, newDog);
    },

    delete : function( dogId ){
        return Dog.remove({ dogId : dogId });
    }
};

module.exports = {DogModel};