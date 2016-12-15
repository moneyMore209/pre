/**
 * Created by Administrator on 2016/11/26.
 */
myapp.controller("receiveCtrl",function($scope){
    $scope.bankShow = {show:false};
    $scope.change = function(){
        $scope.bankShow.show = !$scope.bankShow.show
    };
    $scope.bg =  {
     color:"#de8a92"
    };

    $scope.messages = [
        {adressone:"网点：杭州分行",adresstwo:"地址：杭州市江干区五星路66号",
        adressone1:"网点：杭州萧山支行",adresstwo1:"地址：杭州市萧山区市心北区48号"},
        {adressone:"网点：杭州余杭支行",adresstwo:"地址：杭州市余杭区临平街道西大街61号",
        adressone1:"网点：杭州平海支行",adresstwo1:"地址：杭州市上城区中河中路168号"},
        {adressone:"网点：杭州西溪支行",adresstwo:"地址：杭州市西湖区文二339号",
        adressone1:"网点：杭州滨江小微企业专营支行",adresstwo1:"地址：杭州市滨江区滨盛路1509号"},
        {adressone:"网点：杭州钱江支行",adresstwo:"地址：杭州市下沙经济开发区幸福南路268号",
        adressone1:"网点：绍兴分行",adresstwo1:"地址：绍兴市越城区延安路268号"},
        {adressone:"网点：杭州沙河支行",adresstwo:"地址：杭州市江干区庆春东路78号",
        adressone1:"网点：杭州富阳支行",adresstwo1:"地址：杭州市富阳区富阳街道孙权路227号"},
        {adressone:"网点：绍兴诸暨支行",adresstwo:"地址：诸暨市浣东街道诸暨东路68号",
        adressone1:"网点：衢州分行",adresstwo1:"地址：衢州市柯城区荷花中路12号"},
        {adressone:"网点：杭州江东小微企业专营支行",adresstwo:"地址：杭州市萧山区义蓬街道义蓬中路529号",
        adressone1:"网点：杭州运河小微企业专营支行",adresstwo1:"地址：杭州市拱墅区登云路45号"},
        {adressone:"网点：杭州新天地支行",adresstwo:"地址：杭州市下城区新北街98号",
        adressone1:"网点：杭州中山支行",adresstwo1:"地址：杭州市上城区中山中路271号"},
        {adressone:"网点：杭州萧山泰和花园社区支行",adresstwo:"地址：杭州市萧山区泰和花园百合苑1幢1号",
        adressone1:"网点：杭州下沙云滨湾社区支行",adresstwo1:"地址：杭州市经济技术开发区宝龙商业中心三楼1F-011"}

    ];

});