$(document).ready(function() {
    $("#section2 .product-info").hide();
    function setBg() {
        $windowSize = $(window).width();
        if($windowSize <= 768){
             $("#section2").css({
                'background': 'url(images/section2/section2-bg.png), radial-gradient(circle, rgba(4,20,25,1) 0%, rgba(4,20,25,1) 55%, rgba(4,12,12,1) 100%)',
                'background-size': '55%, 100%',
                'background-repeat': 'no-repeat',
                'background-position': '115% bottom, center'
             });
        } else if($windowSize > 768) {
            $("#section2").css({
                'background': 'url(images/section2/section2-bg.png), radial-gradient(circle, rgba(4,20,25,1) 0%, rgba(4,20,25,1) 55%, rgba(4,12,12,1) 100%)',
                'background-size': '25%, 100%',
                'background-repeat': 'no-repeat',
                'background-position': '90% bottom, center'
            });
        }
        return false;
    }
    setBg();
        
    //////////////////////////////////////////////////////////////////dropdown select
    $('.selectbox').each(function () {
         var $this = $(this),
         numberOfOptions = $(this).children('option').length;
        
         $this.addClass('hide-select');
         $this.wrap('<div class="select"></div>');
         $this.after('<div class="new-select"></div>');
     
         var $newSelect = $this.next('div.new-select');
         $newSelect.text($this.children('option').eq(0).text());
         
         var $list = $('<ul />', {
              'class': 'options'
         }).insertAfter($newSelect);
    
         for (var i = 0; i < numberOfOptions; i++) {
              $('<li />', {
                   text: $this.children('option').eq(i).text(),
                   rel: $this.children('option').eq(i).val(),
                   id: $this.children('option').eq(i).attr('val')
              }).appendTo($list);
         }
         
         var $listItems = $list.children('li');
         
    //////////////////////////////////////////////////////////////////product-list change         
        $newSelect.click(function (e) {
            e.stopPropagation();
            $('div.new-select.active').not(this).each(function () {
               $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        });
        
        
        $listItems.click(function (e) {
            e.stopPropagation();
            $newSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));  
            $list.hide();
            ///////////////////////////////////////////////////product-name change           
            var $watchName = $(this).attr('id');  
            var $watchNameId = '#watch-' + $watchName;
              
            $($watchNameId).addClass('active');
            $($watchNameId).siblings().removeClass('active');
            ///////////////////////////////////////////////////////product-image change
            /*
            $(".product-image").addClass('hidden');
            $(".product-image").removeClass('hidden').addClass('appear');
            */
            $(".product-image").attr('src', 'images/section2/' + $watchName + '.png');
        });
        $('document').click(function () {
            $newSelect.removeClass('active');
            $list.hide();
        });
    });   
    
    $("#section2 .product-list .list-part li").click(function(e) {
        e.stopPropagation();
        var $getProductName = $(this).attr('id');
        var $productNameId = '#watch-' + $getProductName;
        var $getProductIndex = $(this).index();
        
        $("div.new-select").text($(".selectbox").children('option').eq($getProductIndex).text());
        $($productNameId).addClass('active');
        $($productNameId).siblings().removeClass('active');
        $(".product-image").attr('src', 'images/section2/' + $getProductName + '.png');
        
        $("#section2 .product-list").hide()
        $("#section2").css('background', 'radial-gradient(circle, rgba(4,20,25,1) 0%, rgba(4,20,25,1) 55%, rgba(4,12,12,1) 100%)');
        $(".company-name-box").hide();
        
        $("#section2 .product-info").addClass('active');
         setTimeout(function(){
				$("#section2 .product-info").show() 
			}, 200); //Same time as animation
    });         
    $("#section2 .product-info .back").click(function(e) {
        e.stopPropagation();
        $("#section2 .product-info").hide();
        $("#section2 .product-list").show();
        $("#section2 .product-list").removeClass('disappear').addClass('active');
        setBg();
        $(".company-name-box").show();
    });
});
