'use strict';

const Joi = require('joi');
const restHapi = require('rest-hapi');
const _ = require('lodash');

module.exports = function (mongoose) {
    var modelName = "task";
    var Types = mongoose.Schema.Types;


    var schema = new mongoose.Schema({
        name: {
            type: Types.String,
            required: true
        },
        state: {
            type: Types.String
        }
    }, { collection: modelName });



    schema.statics = {
        collectionName:modelName,
        routeOptions: {
            associations: {
            },
            extraEndpoints: [

            ]
        }
    };

    return schema;
};