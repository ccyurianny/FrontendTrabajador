 'use strict';

 angular.module('Trabajador')
     .factory('TrabajadorResource', function($resource){
         return $resource("http://localhost:8000/trabajadores/:id",{
             id:"@id"
         },{
             update:{
                 method: "PUT"
             }
         });
     });

 //creamos nuestro servicio
/* angular.module('Trabajador')
     .service('SerCargos', function(){
     this.datosCargos = function(){
         return [{nombre : "Administrador"}
         ]
     }
 });*/