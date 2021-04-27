$(document).ready(function ()  {
   $('button[filter="2"]').click(function () {
   if($(this).attr('val') == 'off') {
      $('button[filter]').attr('val', 'off');
      $(this).attr('val', 'on');
      $('.filter > div ').hide(300);
      $('.filter > div[filter="2"] ').show(300);
   
   }
   
   }); 
   $('button[filter="3"]').click(function () {
      if($(this).attr('val') == 'off') {
         $('button[filter]').attr('val','off');
         $(this).attr('val','on');
         
         $('.filter > div ').hide(300);
         $('.filter > div[filter="3"] ').show(300);
      
      }
      
      }); 
      $('button[filter="4"]').click(function () {
         if($(this).attr('val') == 'off') {
            $('button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            
            $('.filter > div ').hide(300);
            $('.filter > div[filter="4"] ').show(300);
         
         }
         
         }); 

         $('button[filter="1"]').click(function () {
            if($(this).attr('val') == 'off') {
               $('button[filter]').attr('val', 'off');
               $(this).attr('val', 'on');
               
               $('.filter > div ').show(300);
               
            
            }
            
            }); 
});  


