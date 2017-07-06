'use strict';

let Hapi = require('hapi');
let mongoose = require('mongoose');
let restHapi = require('rest-hapi');
let fs = require('fs');
function api(){

    let server = new Hapi.Server();



    let config = {
        appTitle: "Builder",
        enableTextSearch: true,
        docExpansion: 'list',
        enableSoftDelete: true,
        mongo: {
            URI: "mongodb://herosession:session@54.94.185.144/session"
        }
    };

    let UPLOAD_PATH = 'uploads';
    if (!fs.existsSync(UPLOAD_PATH)) fs.mkdirSync(UPLOAD_PATH);

    server.connection({ port: 8124 });

    restHapi.config = config;


    server.register({
            register: restHapi,
            options: {
                mongoose: mongoose
            }
        },
        function() {

            server.route({
                method: 'GET',
                path: '/uploads/{param*}',
                handler:{
                    directory:{
                        path: 'uploads',
                        listing: true
                    }
                }
            });

            server.route({
                method: 'POST',
                path: '/test',
                handler:function(request, reply) {
                    let html = request.payload.html;
                    var pretty = require('pretty');

                    reply(pretty(html,{ocd: true}));
                }
            });

            server.start(function () {
                restHapi.logUtil.logActionComplete(restHapi.logger, "Server Initialized", server.info);

            });
        });



    return server;
}


module.exports = api();

