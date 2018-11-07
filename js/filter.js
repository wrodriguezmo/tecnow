angular.module('app', [])
    .controller('filters', ['$scope', function($scope) {
        $scope.switch = "program";
        $scope.listObj = [
            {"id": "1", "title": "Maestría en ingeniería de peras", "facultad": "Ingeniería ", "cursos": "Pregrado", "nivel": "Maestría", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo", "showCourse": false, "courses": [
                {"name": "Ms Ing Pera 1", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"},
                {"name": "Ms Ing Pera: Comunicación y Tecnología en el Tiempo", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"},
                {"name": "Ms Ing Pera 2", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"}
            ]},
            {"id": "2", "title": "Maestría en medicina de peras", "facultad": "Medicina ", "cursos": "Pregrado", "nivel": "Maestría", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo", "showCourse": false, "courses": [
                {"name": "Ms Medicina Pera 1", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"}
            ]},
            {"id": "3", "title": "Especialización en arte con peras", "facultad": "Artes", "cursos": "Pregrado", "nivel": "Especialización", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo", "showCourse": true, "courses": [
                {"name": "Especialización Art Pera 1", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"},
                {"name": "Especialización Art Comunicación y Tecnología en el Tiempo", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"},
                {"name": "Especialización Art Comunicación y Tecnología en el Tiempo", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"},
                {"name": "Especialización Art Comunicación y Tecnología en el Tiempo", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"},
                {"name": "Especialización Art Pera 2", "url": "https://conectate.uniandes.edu.co/index.php/innovaciones/539-comunicacion-y-tecnologia-en-el-tiempo"}
            ]}
        ];
        $scope.colorFac = function(word) {
            return word.toLowerCase().replace('ó','o');
        }
        var increment = false;
        $scope.change = function() {
            setTimeout(function() {
                var sum = 24;
                if(increment)
                    sum += 0.1;
                else 
                    sum -= 0.1;
                $( "li" ).each(function(i, e) { e.style.width = sum + "%" })
                increment = !increment;
                console.log("asdf")
              }, 600);
        }
        $scope.changeVisibility = (program) => {
            program.showCourse = !program.showCourse;
        }
    }])
    .filter('unique', function() {
        return function(collection, keyname) {
            var output = [], 
                keys = [];
            angular.forEach(collection, function(item) {
                var key = item[keyname];
                if(keys.indexOf(key) === -1 && key != undefined && key != "") {
                    keys.push(key); 
                    output.push(item);
                }
            });
            return output;
        };
    });