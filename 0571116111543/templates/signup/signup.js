/**
 * Created by Administrator on 2016/11/26.
 */
myapp.controller("signupCtrl",function($scope,$ionicPopup){
        $scope.user = {
            name:"",
            card:"",
            area:""
        };
    $scope.submit = function(){
        $scope.user = {
            name:"",
            card:"",
            area:""
        };
        $ionicPopup.alert({
            template: '<div class="reg-success"><i class="icon ion-checkmark-circled"></i> 报名成功！</div>',
            buttons: [{text:"X"}]
        }).then(function (res) {

        });

    }
});