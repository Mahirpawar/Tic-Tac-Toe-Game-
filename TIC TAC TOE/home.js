let subes= document.querySelectorAll(".sub");
let rst_btn=document.querySelector(".reset-button");
let new_gamebtn= document.querySelector("#new-game");
let msg_sub=document.querySelector(".msg-sub");
let msag =document.querySelector(".winning");
let sub = document.querySelector('.sub-heading');
let score_a = document.querySelector('#score-a');
let score_b = document.querySelector('#score-b');
let scrA=0;
let scrB=0;

let chance= true;                                           //Player turns

const arrays=[   //winning possibilities
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

subes.forEach((sub)=>{    //checking and changing chance
    sub.addEventListener("click",()=>{
        console.log("button Was clicked");
        if(chance===true){                                 // chance of 1st player
            sub.innerText="O";
            chance=false;
            sub.disabled=true;
        }else{                                             // chance of second player
            sub.innerText="X";
            chance=true;
            sub.disabled=true;
        }

        checkwin();

    })
})

rst_btn.addEventListener("click",()=>{                       //reset button
    console.log("Reset button Was clicked");
    reset();

})
new_gamebtn.addEventListener("click",()=>{                   //game button
    console.log("Reset button Was clicked");
    newGame();

})





const checkwin = ()=>{                                        //function to check winner
    for (let condition of arrays){
        
        let chance1=subes[condition[0]].innerText;
        let chance2=subes[condition[1]].innerText;
        let chance3=subes[condition[2]].innerText;

        if(chance1!=="" && chance2!=="" && chance3!==""){
            if(chance1===chance2 && chance2===chance3){
                console.log("winner", chance1);
                disable();
                ShowWinner(chance1);
                if(chance2==="O"){
                    scrA+=1;
                    score_a.innerHTML=`${scrA}`

                }else {
                    scrB+=1;
                    score_b.innerHTML=`${scrB}`

                }

               
            }
        }
    }


}

const ShowWinner = (chance1)=>{                           //function to show winner
    if(chance1==="O"){
    msag.innerText="Congratulations, winner is Player-1 ";

    }else{
    msag.innerText="Congratulations, winner is Player-2 ";
    }   
    msg_sub.classList.remove("hide");
    sub.innerText="GAME OVER !!!";
    
}

const draw = ()=>{
    msag.innerText="THE MATCH IS DRAW ";
    msg_sub.classList.remove("hide");
    sub.innerText="GAME OVER !!!"
        
}

const disable=()=>{                                     // box disable 
    for(let sub of subes){
        sub.disabled=true;
    }
}
const enable=()=>{                                      // box enable 
    for(let sub of subes){
        sub.disabled=false;
        sub.innerText="";
    }
}



const reset=()=>{                                       //reset function
    chance=true;
    enable();
    msg_sub.classList.add("hide");
    sub.innerText="Let's get starteddd!!!";

    
}

const newGame=()=>{                                      //newgame function
    chance=true;
    enable();
    msg_sub.classList.add("hide");
    sub.innerText="Let's get starteddd!!!";
    scrA=0;
    scrB=0;
    score_a.innerHTML=0;
    score_b.innerHTML=0;
    
    
}

// if(chance1!==chance2 ||chance2!==chance3){
    // console.log("match draw");
    // draw();