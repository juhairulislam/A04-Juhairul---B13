
let sb1 = document.getElementById('status-btn-1');
let sb2 = document.getElementById('status-btn-2');
let sb3 = document.getElementById('status-btn-3');
let sb4 = document.getElementById('status-btn-4');
let sb5 = document.getElementById('status-btn-5');
let sb6 = document.getElementById('status-btn-6');
let sb7 = document.getElementById('status-btn-7');
let sb8 = document.getElementById('status-btn-8');

let interviewStore = document.getElementById('interview-store');

let totalJobCount = document.getElementById('total-job-count')


const divCreate = document.createElement('div')
const divCreate2 = document.createElement('div')
const divCreate3 = document.createElement('div')
const divCreate4 = document.createElement('div')
const divCreate5 = document.createElement('div')
const divCreate6 = document.createElement('div')
const divCreate7 = document.createElement('div')
const divCreate8 = document.createElement('div')










// interview 1

document.getElementById('interview-btn-1').addEventListener('click', function () {



    card1.classList.add('border-l-4', 'border-l-green-400')

    sb1.innerText = 'INTERVIEW'

    sb1.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate = card1;
    interviewStore.append(divCreate);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;


    // If user press reject button after pressing interview button ... new---1

    document.getElementById('reject-btn-1').addEventListener('click', function () {

        card1.classList.remove('border-l-4', 'border-l-green-400');
        card1.classList.add('border-l-4', 'border-l-red-400')
        sb1.innerText = 'REJECTED';

        sb1.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb1.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })



    document.getElementById('rejected-showing-btn').addEventListener('click', function () {

        interviewStore.classList.add('hidden');

        totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`;

        document.getElementById('interview-showing-btn').addEventListener('click', function () {
            interviewStore.classList.remove('hidden');
        })


    })






    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {


        




        // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-1').addEventListener('click', function () {

            card1.classList.remove('border-l-4', 'border-l-green-400');
            card1.classList.add('border-l-4', 'border-l-red-400')
            sb1.innerText = 'REJECTED';

            sb1.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb1.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })




        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `



            // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-1').addEventListener('click', function () {

                card1.classList.remove('border-l-4', 'border-l-green-400');
                card1.classList.add('border-l-4', 'border-l-red-400')
                sb1.innerText = 'REJECTED';

                sb1.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb1.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate);

                interviewStore.classList.add('hidden');

                // rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })
        })

    }



    )

        // if user press delete after adding reject new----4

    document.getElementById('delete-btn-1').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })



   



})



// interview 2

document.getElementById('interview-btn-2').addEventListener('click', function () {



    card2.classList.add('border-l-4', 'border-l-green-400')

    sb2.innerText = 'INTERVIEW'

    sb2.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate2 = card2;
    interviewStore.append(divCreate2);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;


      // If user press reject button after pressing interview button ...new---1

    document.getElementById('reject-btn-2').addEventListener('click', function () {

        card2.classList.remove('border-l-4', 'border-l-green-400');
        card2.classList.add('border-l-4', 'border-l-red-400')
        sb2.innerText = 'REJECTED';

        sb2.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb2.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate2);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })




    document.getElementById('rejected-showing-btn').addEventListener('click', function () {

        interviewStore.classList.add('hidden');

        totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`;

        document.getElementById('interview-showing-btn').addEventListener('click', function () {
            interviewStore.classList.remove('hidden');
        })


    })


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {



        
        // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-2').addEventListener('click', function () {

            card2.classList.remove('border-l-4', 'border-l-green-400');
            card2.classList.add('border-l-4', 'border-l-red-400')
            sb2.innerText = 'REJECTED';

            sb2.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb2.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate2);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })

        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `


               // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-2').addEventListener('click', function () {

                card2.classList.remove('border-l-4', 'border-l-green-400');
                card2.classList.add('border-l-4', 'border-l-red-400')
                sb2.innerText = 'REJECTED';

                sb2.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb2.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate2);

                interviewStore.classList.add('hidden');

                rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })


            
        })

    }



    )

    // if user press delete after adding reject new----4

    document.getElementById('delete-btn-2').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })



})





// interview 3


document.getElementById('interview-btn-3').addEventListener('click', function () {



    card3.classList.add('border-l-4', 'border-l-green-400')

    sb3.innerText = 'INTERVIEW'

    sb3.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate3 = card3;
    interviewStore.append(divCreate3);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;


       // If user press reject button after pressing interview button ...new---1

    document.getElementById('reject-btn-3').addEventListener('click', function () {

        card3.classList.remove('border-l-4', 'border-l-green-400');
        card3.classList.add('border-l-4', 'border-l-red-400')
        sb3.innerText = 'REJECTED';

        sb3.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb3.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate3);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {


          // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-3').addEventListener('click', function () {

            card3.classList.remove('border-l-4', 'border-l-green-400');
            card3.classList.add('border-l-4', 'border-l-red-400')
            sb3.innerText = 'REJECTED';

            sb3.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb3.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate3);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })

        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `


            
               // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-3').addEventListener('click', function () {

                card3.classList.remove('border-l-4', 'border-l-green-400');
                card3.classList.add('border-l-4', 'border-l-red-400')
                sb3.innerText = 'REJECTED';

                sb3.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb3.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate3);

                interviewStore.classList.add('hidden');

                rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })

        })
        document.getElementById('rejected-showing-btn').addEventListener('click', function () {

            interviewStore.classList.add('hidden');

            totalJobCount.innerText = `${interviewStore.children.length - interviewStore.children.length} Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click', function () {
                interviewStore.classList.remove('hidden');
            })









        })
    }



    )


        // if user press delete after adding reject new----4

    document.getElementById('delete-btn-3').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })






})


// interview btn 4


document.getElementById('interview-btn-4').addEventListener('click', function () {



    card4.classList.add('border-l-4', 'border-l-green-400')

    sb4.innerText = 'INTERVIEW'

    sb4.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate4 = card4;
    interviewStore.append(divCreate4);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;


        // If user press reject button after pressing interview button ...new---1

    document.getElementById('reject-btn-4').addEventListener('click', function () {

        card4.classList.remove('border-l-4', 'border-l-green-400');
        card4.classList.add('border-l-4', 'border-l-red-400')
        sb4.innerText = 'REJECTED';

        sb4.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb4.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate4);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {



           // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-4').addEventListener('click', function () {

            card4.classList.remove('border-l-4', 'border-l-green-400');
            card4.classList.add('border-l-4', 'border-l-red-400')
            sb4.innerText = 'REJECTED';

            sb4.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb4.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate4);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })

        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `


               // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-4').addEventListener('click', function () {

                card4.classList.remove('border-l-4', 'border-l-green-400');
                card4.classList.add('border-l-4', 'border-l-red-400')
                sb4.innerText = 'REJECTED';

                sb4.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb4.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate4);

                interviewStore.classList.add('hidden');

                rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })
        })
        document.getElementById('rejected-showing-btn').addEventListener('click', function () {

            interviewStore.classList.add('hidden');

            totalJobCount.innerText = `${interviewStore.children.length - interviewStore.children.length} Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click', function () {
                interviewStore.classList.remove('hidden');
            })









        })
    }



    )


     document.getElementById('delete-btn-4').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })




})


// Interview 5
document.getElementById('interview-btn-5').addEventListener('click', function () {



    card5.classList.add('border-l-4', 'border-l-green-400')

    sb5.innerText = 'INTERVIEW'

    sb5.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate5 = card5;
    interviewStore.append(divCreate5);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;

        // If user press reject button after pressing interview button ...new---1

    document.getElementById('reject-btn-5').addEventListener('click', function () {

        card5.classList.remove('border-l-4', 'border-l-green-400');
        card5.classList.add('border-l-4', 'border-l-red-400')
        sb5.innerText = 'REJECTED';

        sb5.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb5.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate5);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })



    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {


             // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-5').addEventListener('click', function () {

            card5.classList.remove('border-l-4', 'border-l-green-400');
            card5.classList.add('border-l-4', 'border-l-red-400')
            sb5.innerText = 'REJECTED';

            sb5.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb5.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate5);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })

        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `

                 // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-5').addEventListener('click', function () {

                card5.classList.remove('border-l-4', 'border-l-green-400');
                card5.classList.add('border-l-4', 'border-l-red-400')
                sb5.innerText = 'REJECTED';

                sb5.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb5.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate5);

                interviewStore.classList.add('hidden');

                rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })
        })
        document.getElementById('rejected-showing-btn').addEventListener('click', function () {

            interviewStore.classList.add('hidden');

            totalJobCount.innerText = `${interviewStore.children.length - interviewStore.children.length} Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click', function () {
                interviewStore.classList.remove('hidden');
            })









        })
    }



    )


         // if user press delete after adding reject new----4

    document.getElementById('delete-btn-5').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })




})


// interview 6
document.getElementById('interview-btn-6').addEventListener('click', function () {



    card6.classList.add('border-l-4', 'border-l-green-400')

    sb6.innerText = 'INTERVIEW'

    sb6.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate6 = card6;
    interviewStore.append(divCreate6);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;


        // If user press reject button after pressing interview button ...new---1

    document.getElementById('reject-btn-6').addEventListener('click', function () {

        card6.classList.remove('border-l-4', 'border-l-green-400');
        card6.classList.add('border-l-4', 'border-l-red-400')
        sb6.innerText = 'REJECTED';

        sb6.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb6.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate6);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {


             // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-6').addEventListener('click', function () {

            card6.classList.remove('border-l-4', 'border-l-green-400');
            card6.classList.add('border-l-4', 'border-l-red-400')
            sb6.innerText = 'REJECTED';

            sb6.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb6.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate6);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })

        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `


                  // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-6').addEventListener('click', function () {

                card6.classList.remove('border-l-4', 'border-l-green-400');
                card6.classList.add('border-l-4', 'border-l-red-400')
                sb6.innerText = 'REJECTED';

                sb6.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb6.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate6);

                interviewStore.classList.add('hidden');

                rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })
        })
        document.getElementById('rejected-showing-btn').addEventListener('click', function () {

            interviewStore.classList.add('hidden');

            totalJobCount.innerText = `${interviewStore.children.length - interviewStore.children.length} Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click', function () {
                interviewStore.classList.remove('hidden');
            })









        })
    }



    )


          // if user press delete after adding reject new----4

    document.getElementById('delete-btn-6').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })





})


// Interview 7
document.getElementById('interview-btn-7').addEventListener('click', function () {



    card7.classList.add('border-l-4', 'border-l-green-400')

    sb7.innerText = 'INTERVIEW'

    sb7.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate7 = card7;
    interviewStore.append(divCreate7);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;

         // If user press reject button after pressing interview button ...new---1

    document.getElementById('reject-btn-7').addEventListener('click', function () {

        card7.classList.remove('border-l-4', 'border-l-green-400');
        card7.classList.add('border-l-4', 'border-l-red-400')
        sb7.innerText = 'REJECTED';

        sb7.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb7.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate7);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {



               // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-7').addEventListener('click', function () {

            card7.classList.remove('border-l-4', 'border-l-green-400');
            card7.classList.add('border-l-4', 'border-l-red-400')
            sb7.innerText = 'REJECTED';

            sb7.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb7.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate7);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })

        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `


                    // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-7').addEventListener('click', function () {

                card7.classList.remove('border-l-4', 'border-l-green-400');
                card7.classList.add('border-l-4', 'border-l-red-400')
                sb7.innerText = 'REJECTED';

                sb7.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb7.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate7);

                interviewStore.classList.add('hidden');

                rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })
        })
        document.getElementById('rejected-showing-btn').addEventListener('click', function () {

            interviewStore.classList.add('hidden');

            totalJobCount.innerText = `${interviewStore.children.length - interviewStore.children.length} Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click', function () {
                interviewStore.classList.remove('hidden');
            })









        })
    }



    )


          // if user press delete after adding reject new----4

    document.getElementById('delete-btn-7').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })





})




// interview 8
document.getElementById('interview-btn-8').addEventListener('click', function () {



    card8.classList.add('border-l-4', 'border-l-green-400')

    sb8.innerText = 'INTERVIEW'

    sb8.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate8 = card8;
    interviewStore.append(divCreate8);
    interviewStore.classList.remove('hidden');
    // allCards.append(divCreate)


    interviewCount.innerText = interviewStore.children.length;


       // If user press reject button after pressing interview button ...new---1

    document.getElementById('reject-btn-8').addEventListener('click', function () {

        card8.classList.remove('border-l-4', 'border-l-green-400');
        card8.classList.add('border-l-4', 'border-l-red-400')
        sb8.innerText = 'REJECTED';

        sb8.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
        sb8.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

        rejectStore.append(divCreate8);

        // interviewStore.classList.add('hidden');

        rejectStore.classList.remove('hidden');

        interviewCount.innerText = interviewStore.children.length;
        rejectedCount.innerText = rejectStore.children.length;



        interviewShowingBtn.addEventListener('click', function () {

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${rejectStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

        })





    })


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {



              // if user press reject button in interview showing button section new ----2


        document.getElementById('reject-btn-8').addEventListener('click', function () {

            card8.classList.remove('border-l-4', 'border-l-green-400');
            card8.classList.add('border-l-4', 'border-l-red-400')
            sb8.innerText = 'REJECTED';

            sb8.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
            sb8.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

            rejectStore.append(divCreate8);

            rejectStore.classList.add('hidden');

            //  rejectStore.classList.remove('hidden') ;

            if (interviewStore.children.length === 0) {

                noJobAvailable.classList.remove('hidden');
                totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`


            }

            else {
                interviewStore.classList.remove('hidden');
                rejectStore.classList.add('hidden')
            }

            rejectedShowingBtn.addEventListener('click', function () {

                rejectStore.classList.remove('hidden')

            })



            interviewCount.innerText = interviewStore.children.length;
            rejectedCount.innerText = rejectStore.children.length;


        })

        noJobAvailable.classList.add('hidden');


        totalJobCount.innerText = `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click', function () {

            interviewStore.classList.remove('hidden');

            totalJobCount.innerText = `${Number(total.innerText)} Jobs `


                     // after visit all showing section if user click reject in all section new ----3

            document.getElementById('reject-btn-8').addEventListener('click', function () {

                card8.classList.remove('border-l-4', 'border-l-green-400');
                card8.classList.add('border-l-4', 'border-l-red-400')
                sb8.innerText = 'REJECTED';

                sb8.classList.remove('btn', 'btn-outline', 'btn-accent', 'bg-green-100');
                sb8.classList.add('btn', 'btn-dash', 'btn-secondary', 'bg-red-200')

                rejectStore.append(divCreate);

                interviewStore.classList.add('hidden');

                rejectStore.classList.remove('hidden');

                totalJobCount.innerText = `${Number(total.innerText)} Jobs ` ;

                interviewCount.innerText = interviewStore.children.length;
                rejectedCount.innerText = rejectStore.children.length;




            })
        })
        document.getElementById('rejected-showing-btn').addEventListener('click', function () {

            interviewStore.classList.add('hidden');

            totalJobCount.innerText = `${interviewStore.children.length - interviewStore.children.length} Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click', function () {
                interviewStore.classList.remove('hidden');
            })









        })
    }



    )

    // / if user press delete after adding reject new----4

    document.getElementById('delete-btn-8').addEventListener('click' , function(){

        if(interviewStore.children.length > 0){
            interviewCount.innerText = interviewStore.children.length - 1 ;
        }

        rejectedCount.innerText = rejectedCount.innerText ;


         
    })





})












