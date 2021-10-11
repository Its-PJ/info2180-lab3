window.onload = () => {
    let tttgrid = document.querySelectorAll("#board > div");
    let XOcheck = true;

    let xWinner = 0;
    let oWinner = 0;

    let message = document.getElementById("status");

    let NewGameButton = document.querySelector(".btn");

    let winnerCheck = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8] , [2,4,6]];

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
            let youWon = checkWinner();

            if (youWon == 1){
                message.classList.add("you-won");
                message.innerHTML = "Congratulations! X is the Winner!";
                tttgrid.forEach((Element)=>{
                    Element.onclick = (event) => {
                        event.preventDefault();
                    }
                })
            } else if (youWon == 0){
                message.classList.add("you-won");
                message.innerHTML = "Congratulations! O is the Winner!";
                tttgrid.forEach((Element)=>{
                    Element.onclick = (event) => {
                        event.preventDefault();
                    }
                })
            }
        }

        Element.onmouseover = function(){
            Element.classList.add("hover");
        }

        Element.onmouseout = function(){
            Element.classList.remove("hover"); 
        }

        let checkWinner =()=> {
            for (item = 0 ; winnerCheck.length; item++){
                 winnerCheck[item].forEach(Element =>{
                     if (tttgrid[Element].classList.contains("X")){
                         xWinner++;
                     }else if (tttgrid[Element].classList.contains("O")){
                         oWinner++;
                     }
                 });
                 if(xWinner == 3){
                     return 1;
                 }else if (oWinner == 3){
                     return 0
                 }
                 xWinner = 0;
                 oWinner = 0;
                 if (item < winnerCheck.length - 1){
                     continue;
                 }
                 return -1;
            }
        }
    });

    NewGameButton.onclick = () =>{
        tttgrid.forEach(function(Element){
            Element.innerHTML = "";
            location.reload();
        });
    }    
}
