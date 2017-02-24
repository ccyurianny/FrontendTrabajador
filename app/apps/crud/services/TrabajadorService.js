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
     })
     .factory('CargosResource', function($resource){
         return $resource("http://localhost:8000/cargos/:id",{
             id:"@id"
         },{
             update:{
                 method: "PUT"
             }
         });
     })
    ;