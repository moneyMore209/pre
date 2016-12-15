/**
 * Created by hxsd on 2016/11/25.
 */
myapp.controller("homeCtrl",function($scope,$ionicPopup){
    $scope.status = "签到";

    $scope.showAlert = function () {

        $ionicPopup.alert({
            template: '<div class="sign-bg"><span>+ 5</span><p class="success">已成功签到1天</p><p class="scores">恭喜您获得了5个积分</p></div>',
            buttons: [{text:"X"}]
        }).then(function (res) {

        });

    };

});