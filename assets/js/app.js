var app = angular.module('app', []);

app.controller('AuthController', function($scope, $window, $http) {
	$scope.login = function() {
		$scope.response = {};
		var email = $scope.login.email;
		var parola = $scope.login.parola;
		$http({
				url: '/api/v1/useri/login',
				method: 'POST',
				params: { email: email, parola: parola }
			})
			.then(function successCallback(response){
				$scope.response = response.data;
				if(response.data.success) $window.location.href = "/contul-meu";
		});
	};
	$scope.register = function() {
		$scope.response = {};
		var email = $scope.register.email;
		var parola = $scope.register.parola;
		var rparola = $scope.register.rparola;

		$http({
			url: '/api/v1/useri/register',
			method: 'POST',
			params: { email: email, parola: parola, rparola: rparola }
		})
		.then(function successCallback(response){
			$scope.response = response.data;
			if(response.data.success) $window.location.href = "/contul-meu";
		});
	};
});

app.controller('Chat', function($scope, $http){

});

io.socket.on('connect', function socketConnected() {

	io.socket.on('message', function(message) {
		alert(message);
	});

});
