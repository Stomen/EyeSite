(function () {
    var count = 0;
    setInterval(function () {
        switch(count++){
            case 0:
                $('.leg1').css('display','block');
                break;
            case 1:
                $('.leg2').css('display','block');
                break;
            case 2:
                $('.leg3').css('display','block');
                break;
            case 3:
                $('.leg4').css('display','block');
                break;
            case 4:
                $('.leg5').css('display','block');
                break;
            case 5:
                $('.leg6').css('display','block');
                break;
            case 6:
                $('.leg1').css('display','none');
                $('.leg2').css('display','none');
                $('.leg3').css('display','none');
                $('.leg4').css('display','none');
                $('.leg5').css('display','none');
                $('.leg6').css('display','none');
                count = 0;
                break;
        }
    },1000);
}());