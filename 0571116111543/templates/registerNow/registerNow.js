/**
 * Created by Administrator on 2016/11/26.
 */
myapp.controller("registerNowCtrl",function($scope,$ionicPopup){
        $scope.user = {
            card:"",
            tel:""
        };
    $scope.submit = function(){
        $ionicPopup.alert({
            template: '<div class="reg-success"><i class="icon ion-checkmark-circled"></i> 注册成功！</div>',
            buttons: [{text:"X"}]
        }).then(function (res) {

        });

    }
});