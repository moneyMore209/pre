/**
 * Created by Administrator on 2016/11/27.
 */
myapp.controller("card_infoCtrl",function($scope,$ionicPopup){
    $scope.data = [
        { cardName:"普通借记卡",
            atm:"ATM跨行取款（前20笔免费）",
            detailOne:"可享受免费网银：普通网银",
            detailTwo:"挂卡费用：按规定标准收费",
            detailThree:"挂失费用：10元/笔",
            img:"images/card11.png"
        },
        { cardName:"郁金香卡",
            atm:"ATM跨行取款（前20笔免费）",
            detailOne:"可享受免费网银：证书版网银",
            detailTwo:"挂卡费用：免费",
            detailThree:"挂失费用：10元/笔",
            img:"images/card12.png"
        },
        { cardName:"贵宾金卡",
            atm:"免费",
            detailOne:"可享受免费网银：专业版网银",
            detailTwo:"挂卡费用：免费",
            detailThree:"挂失费用：免费",
            img:"images/card13.png"
        },
        { cardName:"贵宾白金卡",
            atm:"免费",
            detailOne:"可享受免费网银：专业版网银",
            detailTwo:"挂卡费用：免费",
            detailThree:"挂失费用：免费",
            img:"images/card14.png"
        },
        { cardName:"名士卡",
            atm:"免费",
            detailOne:"可享受免费网银：专业版网银",
            detailTwo:"挂卡费用：免费",
            detailThree:"挂失费用：免费",
            img:"images/card15.png"
        },
        { cardName:"私行卡",
            atm:"免费",
            detailOne:"可享受免费网银：财富版网银",
            detailTwo:"挂卡费用：免费",
            detailThree:"挂失费用：免费",
            img:"images/card16.png"
        }
    ];

    $scope.submitOne = function(){
        $ionicPopup.alert({
            template: '<div class="show_a"><p>ATM跨行取款:　前20笔免费</p>' +
           '<p>可享受免费网银:　普通网银</p>' +
           '<p>换卡费用:　按规定标准收费</p><p>挂失费用:　10元/笔</p>' +
           '<p>可网银汇款手续费:　8折</p>' +
            '<img src="images/card11.png"> </div>',
            buttons: [{text:"X"}]
        }).then(function (res) {
        });
    };

    $scope.submitTwo = function(){
        $ionicPopup.alert({
            template: '<div class="show_b"><p>ATM跨行取款:　前20笔免费</p>' +
            '<p>可享受免费网银:　证书版网银</p>' +
            '<p>换卡费用:　免费</p><p>挂失费用:　10元/笔</p>' +
            '<p>可网银汇款手续费:　5折</p>' +
            '<p>资产证明办理:　5折</p><p>保管箱:　9折</p><img src="images/card12.png"></div>',
            buttons: [{text:"X"}]
        }).then(function (res) {
        });
    };

    $scope.submitThree = function(){
        $ionicPopup.alert({
            template: '<div class="show_c"><p>ATM跨行取款:　免费</p>' +
            '<p>可享受免费网银:　专业版网银</p>' +
            '<p>换卡费用:　免费</p><p>挂失费用:　免费</p>' +
            '<p>可网银汇款手续费:　免费</p><p>资产办理证明:　免费</p>' +
            '<p>保管箱:　8折</p>' +
            '<p>境内汇款手续费:　5折</p>' +
            '<p>柜面跨行汇款:　5折</p>' +
            '<p>网点优先服务:　网点绿色通道提供优先服务</p>' +
            '<p>法务资询:　电话免费法律事务咨询</p><img src="images/card13.png"></div>',
            buttons: [{text:"X"}]
        }).then(function (res) {
        });
    };

    $scope.submitFour = function(){
        $ionicPopup.alert({
            template: '<div class="show_d"><p>ATM跨行取款:　免费</p>' +
        '<p>可享受免费网银:　专业版网银</p>' +
        '<p>换卡费用:　免费</p><p>挂失费用:　免费</p>' +
        '<p>可网银汇款手续费:　免费</p><p>资产办理证明:　免费</p>' +
        '<p>保管箱:　8折</p>' +
        '<p>境内汇款手续费:　免费</p>' +
        '<p>柜面跨行汇款:　免费</p>' +
        '<p>网点优先服务:　网点绿色通道提供优先服务</p>' +
        '<p>法务资询:　电话免费法律事务咨询</p>' +
            '<p>贵宾登机服务:　每年4次</p><p>高铁贵宾侯程:　每年4次</p><img src="images/card14.png"></div>',
            buttons: [{text:"X"}]
        }).then(function (res) {
        });
    };

    $scope.submitFive = function(){
        $ionicPopup.alert({
            template: '<div class="show_e"><p>ATM跨行取款:　免费</p>' +
            '<p>可享受免费网银:　专业版网银</p>' +
            '<p>换卡费用:　免费</p><p>挂失费用:　免费</p>' +
            '<p>可网银汇款手续费:　免费</p><p>资产办理证明:　免费</p>' +
            '<p>保管箱:　8折</p>' +
            '<p>境内汇款手续费:　免费</p>' +
            '<p>柜面跨行汇款:　免费</p>' +
            '<p>网点优先服务:　网点绿色通道提供优先服务</p>' +
            '<p>法务资询:　电话免费法律事务咨询</p>' +
            '<p>贵宾登机服务:　每年6次</p><p>高铁贵宾侯程:　每年6次</p>' +
            '<p>高端体检:　每年1次</p><img src="images/card15.png"></div>',
            buttons: [{text:"X"}]
        }).then(function (res) {
        });
    };

    $scope.submitSix = function(){
        $ionicPopup.alert({
            template: '<div class="show_f"><p>ATM跨行取款:　免费</p>' +
            '<p>可享受免费网银:　财富版网银</p>' +
            '<p>换卡费用:　免费</p><p>挂失费用:　免费</p>' +
            '<p>可网银汇款手续费:　免费</p><p>资产办理证明:　免费</p>' +
            '<p>保管箱:　8折</p>' +
            '<p>境内汇款手续费:　免费</p>' +
            '<p>柜面跨行汇款:　免费</p>' +
            '<p>网点优先服务:　网点绿色通道提供优先服务</p>' +
            '<p>法务资询:　电话免费法律事务咨询</p>' +
            '<p>贵宾登机服务:　每年8次</p><p>高铁贵宾侯程:　每年8次</p>' +
            '<p>高端体检:　每年1次</p><p>三甲医院顾问式就医:　每年5次</p>' +
            '<p>专车机场火车站接送:　每年5次</p><p>留学移民服务:　专属优惠</p><img src="images/card16.png"></div>',
            buttons: [{text:"X"}]
        }).then(function (res) {
        });
    }

});