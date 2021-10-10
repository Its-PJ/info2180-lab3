window.onload = () => {
    let tttgrid = document.querySelectorAll("#board > div");
    let XOcheck = true;

    let NewGameButton = document.querySelector(".btn");

    tttgrid.forEach((Element) => {
        Element.classList.add("square");
        Element.onclick = function(){
            if (Element.innerHTML == "X" || Element.innerHTML == "O"){
                Element.innerHTML = Element.innerHTML;
            }else{
                if (XOcheck){
                    Element.innerHTML = "X";
                    Element.classList.add("X");
                    XOcheck = false;
                }else if (!XOcheck){
                    Element.innerHTML = "O";
                    Element.classList.add("O");
                    XOcheck = true;
                }
            }
        }

        Element.onmouseover = function(){
            Element.classList.add("hover");
        }

        Element.onmouseout = function(){
            Element.classList.remove("hover"); 
        }
    });

    NewGameButton.onclick = () =>{
        tttgrid.forEach(function(Element){
            Element.innerHTML = "";
            location.reload();
        });
    }
    
}
