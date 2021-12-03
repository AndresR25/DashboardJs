const {DogModel} = require('./../models/dog');

const DogController = {
    displayhome : function( request, response ){
        DogModel
            .getAllDogs()
            .then( data => {
                console.log( data );
                response.render( 'index', { dogs : data } );
            });
    },
    formAddDog : function( request, response ){
        response.render( 'add' );
    },
    addDog : function( request, response ){
        console.log( request.body );
        const dogId = Number(request.body.dogId);
        const dogName = request.body.dogName;
        const dogInformation = request.body.dogInformation;
    
        const newDog = {
            dogId,
            dogName,
            dogInformation
        };
        DogModel
            .insertDog( newDog)
            .then( result => {
                response.redirect( '/dog/alldogs' );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
                response.redirect( '/dog/dogs' );
            })
    },
    getDogInfo : function( request, response ){
        var id = request.params.dogId;
        DogModel
            .getDogById(id)
            .then( data => {
                console.log( data );
                response.render( 'show', { dog : data } );
            });  
    },
    goEditDogInfo : function( request, response ){
        var id = request.params.dogId;
        DogModel
            .getDogById(id)
            .then( data => {
                console.log( data );
                response.render( 'edit', { dog : data } );
            });  
    },
    updateDogInfo : function( request, response ){
        console.log( request.body );
        var id = request.params.dogId;
        const dogName = request.body.dogName;
        const dogInformation = request.body.dogInformation;
    
        const newDog = {
            dogName,
            dogInformation
        };
        DogModel
            .updateDogInfo( id, newDog )
            .then( result => {
                console.log(result );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
            })
        response.redirect( '/dog/alldogs' );
    },
    deleteDog : function( request, response ){
        var id = request.params.dogId;
        DogModel
            .delete( id )
            .then( result => {
                console.log(result );
            })
            .catch( err => {
                console.log( "Something went wrong!" );
                console.log( err );
            })
            response.redirect( '/dog/alldogs' );
    }

}

module.exports = {DogController};