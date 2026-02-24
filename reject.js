let rejectStore = document.getElementById('reject-store') ;

const crateDiv = document.createElement('div')
const crateDiv2 = document.createElement('div')
const crateDiv3= document.createElement('div')
const crateDiv4 = document.createElement('div')
const crateDiv5 = document.createElement('div')
const crateDiv6 = document.createElement('div')
const crateDiv7= document.createElement('div')
const crateDiv8= document.createElement('div')



// for reject 1 button 

document.getElementById('reject-btn-1').addEventListener('click' , function(){

    card1.classList.add('border-l-4', 'border-l-red-400') ;

    sb1.innerText = 'REJECTED' ;

    sb1.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv = card1;
    rejectStore.append(crateDiv);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-1').addEventListener('click' , function(){

         card1.classList.remove('border-l-4', 'border-l-red-400') ;
         card1.classList.add('border-l-4', 'border-l-green-400')
         sb1.innerText = 'INTERVIEW' ;

         sb1.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

         interviewStore.append(crateDiv) ; 
        
         rejectStore.classList.add('hidden') ;

        //  interviewStore.classList.remove('hidden') ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;



         rejectedShowingBtn.addEventListener('click' , function(){

             if(rejectStore.children.length === 0){

            noJobAvailable.classList.remove('hidden') ;
            totalJobCount.innerText =  `${rejectStore.children.length} of 8 Jobs`
           

         }

         else{
            rejectStore.classList.remove('hidden') ;
            interviewStore.classList.add('hidden')
         }

         })


         


    })




     interviewShowingBtn.addEventListener('click' , function(){
            
            rejectStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length  } of 8 Jobs`;

            rejectedShowingBtn.addEventListener('click' , function(){
                rejectStore.classList.remove('hidden');
            })

        })



      rejectedShowingBtn.addEventListener('click', function (event) {


         document.getElementById('interview-btn-1').addEventListener('click' , function(){

         card1.classList.remove('border-l-4', 'border-l-red-400') ;
         card1.classList.add('border-l-4', 'border-l-green-400')
         sb1.innerText = 'INTERVIEW' ;

         sb1.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

         interviewStore.append(crateDiv) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.add('hidden') ;

         if(rejectStore.children.length === 0){

            noJobAvailable.classList.remove('hidden') ;
            totalJobCount.innerText =  `${rejectStore.children.length} of 8 Jobs`
           

         }

         else{
            rejectStore.classList.remove('hidden') ;
            interviewStore.classList.add('hidden')
         }


         interviewShowingBtn.addEventListener('click' , function(){
            interviewStore.classList.remove('hidden')
         })

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;

         rejectedShowingBtn.addEventListener('click' , function(){
            noJobAvailable.classList.remove('hidden')
         })


    })




        

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${rejectStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            rejectStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

        document.getElementById('interview-btn-1').addEventListener('click' , function(){

         card1.classList.remove('border-l-4', 'border-l-red-400') ;
         card1.classList.add('border-l-4', 'border-l-green-400')
         sb1.innerText = 'INTERVIEW' ;

         sb1.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

         interviewStore.append(crateDiv) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 



    )



})