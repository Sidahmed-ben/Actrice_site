
$(function(){
    


    let $mainMenuItems = $("#main-menu ul").children("li");
    let totalMainMenuItems = $mainMenuItems.length;
    openedindex = 2 ;

    let mon_animation = function(this_) {
        let $item = $(this_).parent();
            let $colorImage = $item.find(".color");
            $colorImage.animate({left:"0px"},250);
            $colorImage.parents("li").animate({width:"420px"},250);
            console.log(" I'm here ");
            let index = $(this_).parent().index();
            if(openedindex !== -1 ){
                let $li = $mainMenuItems.eq(openedindex);
                let $color = $li.find(".color");
                $color.animate({left:"140px"},250);
                $li.animate({width:"140px"}, 250);
            }
            openedindex = index;
    } 

    $mainMenuItems.eq(openedindex).find(".color").animate({left:"0px"},250);
    $mainMenuItems.eq(openedindex).animate({width:"420px"},250);



    let init = function(){
        $mainMenuItems.children(".images").click(function(){
            mon_animation(this);                     
        })

        $("#buttons").children("button").click(function(){
            let index = $(this).index();
            let $color_im = $mainMenuItems.eq(index).children("div");
            mon_animation($color_im);
        })
    };


    

    init();






});