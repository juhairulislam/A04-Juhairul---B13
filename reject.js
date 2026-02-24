let rejectStore = document.getElementById('reject-store') ;

const crateDiv = document.createElement('div')
const crateDiv2 = document.createElement('div')
const crateDiv3= document.createElement('div')
const crateDiv4 = document.createElement('div')
const crateDiv5 = document.createElement('div')
const crateDiv6 = document.createElement('div')
const crateDiv7= document.createElement('div')
const crateDiv8= document.createElement('div')



// for reject first list button 

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
         sb1.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;



         rejectedShowingBtn.addEventListener('click' , function(){

             if(rejectStore.children.length === 0){

            noJobAvailable.classList.remove('hidden') ;
           
           

         }

         else{
            rejectStore.classList.remove('hidden') ;
            interviewStore.classList.add('hidden') ;
            totalJobCount.innerText =  `${rejectStore.children.length} of 8 Jobs`
         }

         })


         


    })




     interviewShowingBtn.addEventListener('click' , function(){
            
            rejectStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length  } of 8 Jobs`;

            rejectedShowingBtn.addEventListener('click' , function(){
                rejectStore.classList.remove('hidden');

                 totalJobCount.innerText =  `${rejectStore.children.length} of 8 Jobs`
            })



            

        })



      rejectedShowingBtn.addEventListener('click', function (event) {


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-1').addEventListener('click' , function(){

         card1.classList.remove('border-l-4', 'border-l-red-400') ;
         card1.classList.add('border-l-4', 'border-l-green-400')
         sb1.innerText = 'INTERVIEW' ;

         sb1.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb1.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

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



            // in all section if user click interview

        document.getElementById('interview-btn-1').addEventListener('click' , function(){

         card1.classList.remove('border-l-4', 'border-l-red-400') ;
         card1.classList.add('border-l-4', 'border-l-green-400')
         sb1.innerText = 'INTERVIEW' ;

         sb1.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb1.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-1').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})



// for reject 2nd list button


document.getElementById('reject-btn-2').addEventListener('click' , function(){

    card2.classList.add('border-l-4', 'border-l-red-400') ;

    sb2.innerText = 'REJECTED' ;

    sb2.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv2 = card2;
    rejectStore.append(crateDiv2);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-2').addEventListener('click' , function(){

         card2.classList.remove('border-l-4', 'border-l-red-400') ;
         card2.classList.add('border-l-4', 'border-l-green-400')
         sb2.innerText = 'INTERVIEW' ;

         sb2.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb2.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv2) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

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


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-2').addEventListener('click' , function(){

         card2.classList.remove('border-l-4', 'border-l-red-400') ;
         card2.classList.add('border-l-4', 'border-l-green-400')
         sb2.innerText = 'INTERVIEW' ;

         sb2.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb2.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv2) ; 
        
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



            // in all section if user click interview

        document.getElementById('interview-btn-2').addEventListener('click' , function(){

         card2.classList.remove('border-l-4', 'border-l-red-400') ;
         card2.classList.add('border-l-4', 'border-l-green-400')
         sb2.innerText = 'INTERVIEW' ;

         sb2.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb2.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv2) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-2').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})




// for reject 3rd list button


document.getElementById('reject-btn-3').addEventListener('click' , function(){

    card3.classList.add('border-l-4', 'border-l-red-400') ;

    sb3.innerText = 'REJECTED' ;

    sb3.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv3 = card3;
    rejectStore.append(crateDiv3);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-3').addEventListener('click' , function(){

         card3.classList.remove('border-l-4', 'border-l-red-400') ;
         card3.classList.add('border-l-4', 'border-l-green-400')
         sb3.innerText = 'INTERVIEW' ;

         sb3.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb3.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv3) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

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


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-3').addEventListener('click' , function(){

         card3.classList.remove('border-l-4', 'border-l-red-400') ;
         card3.classList.add('border-l-4', 'border-l-green-400')
         sb3.innerText = 'INTERVIEW' ;

         sb3.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb3.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv3) ; 
        
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



            // in all section if user click interview

        document.getElementById('interview-btn-3').addEventListener('click' , function(){

         card3.classList.remove('border-l-4', 'border-l-red-400') ;
         card3.classList.add('border-l-4', 'border-l-green-400')
         sb3.innerText = 'INTERVIEW' ;

         sb3.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb3.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv3) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-3').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})




// for reject 4th list button


document.getElementById('reject-btn-4').addEventListener('click' , function(){

    card4.classList.add('border-l-4', 'border-l-red-400') ;

    sb4.innerText = 'REJECTED' ;

    sb4.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv4 = card4;
    rejectStore.append(crateDiv4);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-4').addEventListener('click' , function(){

         card4.classList.remove('border-l-4', 'border-l-red-400') ;
         card4.classList.add('border-l-4', 'border-l-green-400')
         sb4.innerText = 'INTERVIEW' ;

         sb4.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb4.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv4) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

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


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-4').addEventListener('click' , function(){

         card4.classList.remove('border-l-4', 'border-l-red-400') ;
         card4.classList.add('border-l-4', 'border-l-green-400')
         sb4.innerText = 'INTERVIEW' ;

         sb4.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb4.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv4) ; 
        
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



            // in all section if user click interview

        document.getElementById('interview-btn-4').addEventListener('click' , function(){

         card4.classList.remove('border-l-4', 'border-l-red-400') ;
         card4.classList.add('border-l-4', 'border-l-green-400')
         sb4.innerText = 'INTERVIEW' ;

         sb4.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb4.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv4) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-4').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})




// for reject 5th list button


document.getElementById('reject-btn-5').addEventListener('click' , function(){

    card5.classList.add('border-l-4', 'border-l-red-400') ;

    sb5.innerText = 'REJECTED' ;

    sb5.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv5 = card5;
    rejectStore.append(crateDiv5);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-5').addEventListener('click' , function(){

         card5.classList.remove('border-l-4', 'border-l-red-400') ;
         card5.classList.add('border-l-4', 'border-l-green-400')
         sb5.innerText = 'INTERVIEW' ;

         sb5.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb5.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv5) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

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


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-5').addEventListener('click' , function(){

         card5.classList.remove('border-l-4', 'border-l-red-400') ;
         card5.classList.add('border-l-4', 'border-l-green-400')
         sb5.innerText = 'INTERVIEW' ;

         sb5.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb5.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv5) ; 
        
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



            // in all section if user click interview

        document.getElementById('interview-btn-5').addEventListener('click' , function(){

         card5.classList.remove('border-l-4', 'border-l-red-400') ;
         card5.classList.add('border-l-4', 'border-l-green-400')
         sb5.innerText = 'INTERVIEW' ;

         sb5.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb5.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv5) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-5').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})




// for reject 6th list button


document.getElementById('reject-btn-6').addEventListener('click' , function(){

    card6.classList.add('border-l-4', 'border-l-red-400') ;

    sb6.innerText = 'REJECTED' ;

    sb6.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv6 = card6;
    rejectStore.append(crateDiv6);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-6').addEventListener('click' , function(){

         card6.classList.remove('border-l-4', 'border-l-red-400') ;
         card6.classList.add('border-l-4', 'border-l-green-400')
         sb6.innerText = 'INTERVIEW' ;

         sb6.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb6.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv6) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

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


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-6').addEventListener('click' , function(){

         card6.classList.remove('border-l-4', 'border-l-red-400') ;
         card6.classList.add('border-l-4', 'border-l-green-400')
         sb6.innerText = 'INTERVIEW' ;

         sb6.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb6.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv6) ; 
        
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



            // in all section if user click interview

        document.getElementById('interview-btn-6').addEventListener('click' , function(){

         card6.classList.remove('border-l-4', 'border-l-red-400') ;
         card6.classList.add('border-l-4', 'border-l-green-400')
         sb6.innerText = 'INTERVIEW' ;

         sb6.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb6.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv6) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-6').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})




// for reject 7th list button


document.getElementById('reject-btn-7').addEventListener('click' , function(){

    card7.classList.add('border-l-4', 'border-l-red-400') ;

    sb7.innerText = 'REJECTED' ;

    sb7.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv7 = card7;
    rejectStore.append(crateDiv7);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-7').addEventListener('click' , function(){

         card7.classList.remove('border-l-4', 'border-l-red-400') ;
         card7.classList.add('border-l-4', 'border-l-green-400')
         sb7.innerText = 'INTERVIEW' ;

         sb7.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb7.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv7) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

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


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-7').addEventListener('click' , function(){

         card7.classList.remove('border-l-4', 'border-l-red-400') ;
         card7.classList.add('border-l-4', 'border-l-green-400')
         sb7.innerText = 'INTERVIEW' ;

         sb7.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb7.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv7) ; 
        
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



            // in all section if user click interview

        document.getElementById('interview-btn-7').addEventListener('click' , function(){

         card7.classList.remove('border-l-4', 'border-l-red-400') ;
         card7.classList.add('border-l-4', 'border-l-green-400')
         sb7.innerText = 'INTERVIEW' ;

         sb7.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb7.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv7) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-7').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})




// for reject 8th list button


document.getElementById('reject-btn-8').addEventListener('click' , function(){

    card8.classList.add('border-l-4', 'border-l-red-400') ;

    sb8.innerText = 'REJECTED' ;

    sb8.classList.add('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 

    let crateDiv8 = card8;
    rejectStore.append(crateDiv8);
    rejectStore.classList.remove('hidden');


    rejectedCount.innerText = rejectStore.children.length ;


    // if user press interview after reject then ...


    document.getElementById('interview-btn-8').addEventListener('click' , function(){

         card8.classList.remove('border-l-4', 'border-l-red-400') ;
         card8.classList.add('border-l-4', 'border-l-green-400')
         sb8.innerText = 'INTERVIEW' ;

         sb8.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb8.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv8) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

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


        // if user click interview button in reject showing section


         document.getElementById('interview-btn-8').addEventListener('click' , function(){

         card8.classList.remove('border-l-4', 'border-l-red-400') ;
         card8.classList.add('border-l-4', 'border-l-green-400')
         sb8.innerText = 'INTERVIEW' ;

         sb8.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
         sb8.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv8) ; 
        
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



            // in all section if user click interview

        document.getElementById('interview-btn-2').addEventListener('click' , function(){

         card8.classList.remove('border-l-4', 'border-l-red-400') ;
         card8.classList.add('border-l-4', 'border-l-green-400')
         sb8.innerText = 'INTERVIEW' ;

         sb8.classList.remove('btn' , 'btn-dash', 'btn-secondary', 'bg-red-200'); 
          sb8.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100')

         interviewStore.append(crateDiv8) ; 
        
        //  rejectStore.classList.add('hidden') ;

         interviewStore.classList.remove('hidden') ;

         totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

         interviewCount.innerText = interviewStore.children.length ;
         rejectedCount.innerText = rejectStore.children.length ;


         


    })
        })



       


        
       
    } 


    )


     document.getElementById('delete-btn-8').addEventListener('click' , function(){

        if(rejectStore.children.length > 0){
            rejectedCount.innerText = rejectStore.children.length - 1 ;

            
            
        }

         interviewCount.innerText = interviewCount.innerText ;


         
    })



 



})



