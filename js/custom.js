 
$(document).ready(function(){



//ingresso animato

     $(window).on("load scroll", function(){

        $("section").each(function(){

                var $this = $(this); 


                if($this.offset().top < ($(window).scrollTop() + $(window).height() - 150 )){
                    $this.addClass("active");
                }
                
        });
    });

}); 
     