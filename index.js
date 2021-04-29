
var acc = document.getElementsByClassName("question");
var i;


for (i = 0; i < acc.length; i++) {
    
    acc[i].addEventListener("click", function() {
        var answer = this.nextElementSibling;
        var iconn=this.querySelector("i")
        var questionP=this.querySelector("p")
        if (answer.style.display === "block") {
            answer.style.display = "none";
            this.parentElement.style.height="fit-content"
            questionP.style.color="unset"
            questionP.style.fontWeight="unset"
            iconn.classList.add("fa-angle-down")
            iconn.classList.remove("fa-angle-up");
        
        } else {
            answer.style.display = "block";
            answer.style.marginRight="4vw"
            this.parentElement.style.height="5.4em"
            questionP.style.color="black"
            questionP.style.fontWeight="700"
            iconn.classList.add("fa-angle-up");
            iconn.classList.remove("fa-angle-down")
            }
    });
}
 


// var QuestionP=document.getElementsByClassName('quest');
// var Answer=document.getElementsByClassName('answer');
// var icons=document.querySelector('i');
// var Quest= document.getElementsByClassName('question')

// console.log(QuestionP)
// console.log(Answer)
// console.log(Quest);
// console.log(document.getElementById('icon').className)


// var eventNo;

// QuestionP[0].addEventListener('click', show);
// Answer[0].addEventListener('click', close);

// function show(){
//     Answer[0].style.display= 'flex';
//     Quest[0].style.height= '70px';
//     QuestionP[0].style.width = '100%';
//     document.getElementById('icon').className='fa fa-angle-up';
// }

// function close(){
//     Answer[0].style.display='none';
//     Quest[0].style.height='fit-content';
//     document.getElementById('icon').className='fa fa-angle-down';
    
// }



// for(var x=0 ;x<QuestionP.length; x++){
//     Quest[x].addEventListener("click",function(){
//         console.log(this)
//         console.log("this is..."+QuestionP)
//     })  
// }

// for(var x=0 ;x<QuestionP.length; x++){
//     QuestionP[0].addEventListener('click', show);
//     Answer[0].addEventListener('click', close);

// }



// var ans=document.getElementsByClassName("answer")
// var iconic=document.getElementsByClassName("fa fa-angle-down")
// console.log(ans)


        // this.classList.add('hid')
    //     console.log(this.classList)
        
    //     console.log(answer.style.display)
    //     console.log(answer.parentElement);
    //     console.log(iconic[i].className)
    //     this.parentElement.style.height="100px"
    //     answer.style.display = "block"
    //     answer.style.height="70px"
    //     iconic[i].className='fa fa-angle-up';
    //     document.getElementById("word").style.color =  "hsl(238, 29%, 16%)"; 
    // })
    // ans[i].addEventListener("click",function(){
    //     this.style.display = "none"
    //     this.parentElement.style.height="fit-content"
    //     document.getElementById('icon').className='fa fa-angle-down';
    //     console.log(this)
    // })    
// }
        // if (answer.style.display === "none") {

        //     console.log(answer)
        // } else {
        // 
        // answer.style.display = "none"
        // document.getElementById('icon').className='fa fa-angle-down';
