        window.onload = function()
        {
        if (!!localStorage.getItem("listitems"))
        {
          document.getElementById("items").innerHTML = "No items";
           }
          else {
            document.getElementById("items").innerHTML = " ";
          }//else
          init();
        }//function

        function init()
        {
          document.getElementById("add").addEventListener("click",saveData,false);
        }

        function saveData()
        {    
        
        var input = document.getElementById ("newtitle").value;
         var d = new Date();
         var n = d.getSeconds();
         

         window.localStorage.setItem("listitems",input);
         alert("Your data is stored successfully");

         var output = window.localStorage.getItem("listitems");

         document.getElementById("items").innerHTML = output + " " + "added" + " " + (60-n) + " " + "seconds ago";
         
        }
        function end()
        {
          document.getElementById("clear").addEventListener("click",resetData,false);
        }

        function resetData()
        {
          window.localStorage.removeItem("items");
          window.getElementById("newtitle").innerHTML = " ";
         }
    
    
    
    
    