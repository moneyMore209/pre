/**
 * Created by hxsd on 2016/11/23.
 */
var myapp = angular.module("myapp",["ionic"]);
myapp.controller("myCtrl",function($scope){

    $scope.users={
        user:"",
        phone:"",
        adress:"",
        document:"",
        name:"",
        score:300
    };

});

myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"templates/login/login.html",
        controller:"loginCtrl"
    })
        .state("submit_success",{
            url:"/submit_success",
            templateUrl:"templates/submit_success/submit_success.html",
            controller:"submit_successCtrl"
        })
        .state("home",{
            url:"/home",
            templateUrl:"templates/home/home.html",
            controller:"homeCtrl"
        })
        .state("receive",{
            url:"/receive",
            templateUrl:"templates/receive/receive.html",
            controller:"receiveCtrl"

        })
        .state("messageRecord",{
            url:"/messageRecord",
            templateUrl:"templates/messageRecord/messageRecord.html",
            controller:"messageRecordCtrl"

        })
        .state("signup",{
            url:"/signup",
            templateUrl:"templates/signup/signup.html",
            controller:"signupCtrl"

        })
        .state("customerService",{
            url:"/customerService",
            templateUrl:"templates/customerService/customerService.html"

        })
        .state("install",{
            url:"/install",
            templateUrl:"templates/install/install.html"

        })
        .state("registerNow",{
            url:"/registerNow",
            templateUrl:"templates/registerNow/registerNow.html",
            controller:"registerNowCtrl"

        })
        .state("card_info",{
            url:"/card_info",
            templateUrl:"templates/card_info/card_info.html",
            controller:"card_infoCtrl"

        });

    $urlRouterProvider.otherwise("/login")
});
