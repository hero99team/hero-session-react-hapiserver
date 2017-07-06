'use strict';

const Joi = require('joi');
const restHapi = require('rest-hapi');
const _ = require('lodash');

module.exports = function (mongoose) {
    var modelName = "project";
    var Types = mongoose.Schema.Types;


    var schema = new mongoose.Schema({
        name: {
            type: Types.String,
            required: true
        },
        description: {
            type: Types.String
        },
        framework: {
            type: Types.String
        }

    }, { collection: modelName });



    schema.statics = {
        collectionName:modelName,
        routeOptions: {
            associations: {
                pages: {
                    type: "ONE_MANY",
                    foreignField: "project",
                    model: "page"
                }
            },
            extraEndpoints: [

            ]
        }
    };

    return schema;
};