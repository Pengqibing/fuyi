/**
 * Created by ice on 2017-3-11.
 */
function main(){
    $(window).scroll(function () {
        if($(".navbar").offset().top > 50){
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        }else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    })



}
main();