'use strict';

angular.module('Trabajador')
    .controller('IndexTrabajadorCtrl', function ($scope, TrabajadorResource,  $location, $timeout) {

        $scope.Trabajadores= TrabajadorResource.query();
        $scope.eliminarTrabajador = function (id) {
            $(document).ready(function(){
               $('#modalConfirm').openModal();
            });
            $("#siEliminar").click(function(e){
                TrabajadorResource.delete({
                    id: id
                });
                Materialize.toast('Trabajador Eliminado.', 5000, 'pink');
                $timeout(function () {
                    $scope.Trabajadores= TrabajadorResource.query();
                }, 1000);
            });


        }
    })
    .controller('NuevoTrabajadorCtrl', function($scope, TrabajadorResource, $location, $timeout){
        $(document).ready(function() {
            $('select').material_select();
        });
        $scope.titulo="Datos del Nuevo Trabajador";
        $scope.boton="Guardar";
        $scope.botonEdit="Editar";
        $scope.botonRegresar="Regresar";
        $scope.Trabajador={};
      //  $scope.Cargos = ['Administrador','Analista'];
       // $scope.Estatuss = ['Activo','Inactivo'];
        $scope.guardarTrabajador = function(){

            if ($scope.trabajdorForm.$valid) {
                TrabajadorResource.save($scope.Trabajador);
                Materialize.toast('Trabajador Registrado.',5000,'pink');
                $timeout(function(){
                    $location.path('/trabajadores');
                },1000);
            }else{
                if($scope.trabajdorForm.cedula.$error.required){
                    Materialize.toast('La Cedula es Requerida.',5000,'pink');
                }
                if($scope.trabajdorForm.nombre.$error.required){
                    Materialize.toast('El Nombre es Requerido.',5000,'pink');
                }
                if($scope.trabajdorForm.apellido.$error.required){
                    Materialize.toast('El Apellido es Requerido.',5000,'pink');
                }
                if($scope.trabajdorForm.correo.$error.required){
                    Materialize.toast('El Correo es Requerido.',5000,'pink');
                }
                if($scope.trabajdorForm.estatus.$error.required){
                    Materialize.toast('El Estatus es Requerido.',5000,'pink');
                }
               /* if($scope.trabajdorForm.cargo.$error.required){
                    Materialize.toast('El Cargo es Requerido.',5000,'pink');
                }*/
            }

        }

    })

    .controller('EditarTrabajadorCtrl', function($scope, TrabajadorResource, $location, $timeout, $stateParams){
        $scope.titulo="Editar Datos del Trabajador";
        $scope.boton="Actualizar";
        $scope.botonRegresar="Regresar";
        $scope.Trabajador=TrabajadorResource.get({
            id:$stateParams.id
        });
        $scope.guardarTrabajador = function(){
            TrabajadorResource.update($scope.Trabajador);
            Materialize.toast('Trabajador Actualizado.',5000,'pink');
            $timeout(function(){
               $location.path('/trabajadores');
            },1000);
        }

   })
.controller('CategoriasCtrl', function($scope){

 var categorias=[
 {"id": "0", "nombre": "Carros", "idpadre": ""},
 {"id": "1", "nombre": "Computadoras", "idpadre": ""},
 {"id": "2", "nombre": "Rines", "idpadre": "0"},
 {"id": "3", "nombre": "Perfil Bajo", "idpadre": "2"},
 {"id": "4", "nombre": "Lujo", "idpadre": "3"},
 {"id": "5", "nombre": "Repuestos", "idpadre": "0"},
 {"id": "6", "nombre": "Momo", "idpadre": "4"},
 {"id": "7", "nombre": "Software", "idpadre": "1"},
 {"id": "8", "nombre": "Motores", "idpadre": "5"},
 {"id": "9", "nombre": "Juegos", "idpadre": "7"},
 {"id": "10", "nombre": "Administrativos", "idpadre": "7"},
 {"id": "11", "nombre": "Animales", "idpadre": ""},
 {"id": "12", "nombre": "Hardware", "idpadre": "1"},
 {"id": "13", "nombre": "Perros", "idpadre": "11"},
 {"id": "14", "nombre": "Gatos", "idpadre": "11"},
 {"id": "15", "nombre": "Hogar", "idpadre": ""},
 {"id": "16", "nombre": "Estrategia", "idpadre": "9"},
 {"id": "17", "nombre": "Rol", "idpadre": "9"}
 ];
 var ordenados = categorias.sort(function(a, b) {
 return a.idpadre - b.idpadre;
 });
 var principales = ordenados.filter(esPrincipal);
 var log = principales.length;
 var array = ordenados.slice(log,categorias.length);
 var arbol = [];
 for (var i=0; i < principales.length; i++){
 arbol = arbol.concat(principales[i]);
 arbol = arbol.concat(buscarHijos(principales[i]));
 }
 function esPrincipal(elemento) {
 return elemento.idpadre == "";
 }

 function buscarHijos(elemento) {
 var hijos =[];
 for (var m=0; m < array.length; m++) {
 if(array[m].idpadre === elemento.id){
 hijos = hijos.concat(array[m]);
 hijos = hijos.concat(buscarHijos(array[m]));
 }
 }
 return hijos;
 }
 for (var i=0; i < arbol.length; i++) {

// console.log(arbol[i]);
 }

 $scope.Categorias = arbol.slice(0);

 });

