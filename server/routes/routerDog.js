const express = require("express");
const DogRouter = express.Router();
const {DogController} = require('./../controllers/dogController');

DogRouter
    .get( '/alldogs', DogController.displayhome );
DogRouter
    .get( '/dogs/new', DogController.formAddDog );
DogRouter
    .post( '/dogs', DogController.addDog );
DogRouter
    .get( '/dogs/:dogId', DogController.getDogInfo )
DogRouter
    .get( '/dogs/edit/:dogId', DogController.goEditDogInfo );
DogRouter
    .post( '/dogs/:dogId', DogController.updateDogInfo );
DogRouter
    .post( '/destroy/:dogId', DogController.deleteDog );

module.exports = {DogRouter}