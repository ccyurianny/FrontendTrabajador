'use strict';
angular.module('Trabajador', ['ui.router','ngResource','ngSanitize'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/trabajadores');

    $stateProvider

        .state('catalogo',{
            url:'/trabajadores',
            templateUrl: 'app/apps/crud/html/catalogo_trabajadores.html',
            controller: 'IndexTrabajadorCtrl'
        })
        .state('trabajador',{
            url:'/crear/trabajador',
            templateUrl: 'app/apps/crud/html/trabajador.html',
            controller: 'NuevoTrabajadorCtrl'
        })
        .state('editar',{
            url:'/editar/{id}',
            templateUrl: 'app/apps/crud/html/trabajador.html',
            controller: 'EditarTrabajadorCtrl'
        })
        .state('categorias',{
            url:'/categorias',
            templateUrl: 'app/apps/logica/categorias.html',
            controller: 'CategoriasCtrl'
        })

}]);

