 
            let num = document.getElementById('num');
            let increase = document.getElementById('increase');
            let decrease =  document.getElementById('decrease');
            let reset =  document.getElementById('reset');
            let count =0;
            function set(){
                num.textContent = count;
            };
            
            
            increase.onclick = function(){
                count++;
                set();
            } 
            decrease.onclick = function(){
                count--;
                set();
            }
            reset.onclick = function(){
                count=0;
                set();
            }
                