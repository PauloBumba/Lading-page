$(document).ready(
    function(){
        
       
        function Menu(){
          var para=document.getElementById("paragrafo");
          var itens  =document.getElementById("nav");
          if(itens.style.display=="block"){
            itens.style.display="none"
          

          }
          else{
            itens.style.display="block"
          }
        }
        $("#burger").click(
            function(){
                Menu();
                if($("#p").is(" :visible")){
                    $("#p").hide();
                }
                else{
                    $("#p").show();
                }
                
                
           
             
            }
            
        )
    }





  )