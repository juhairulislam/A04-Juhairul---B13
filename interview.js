
let sb1 = document.getElementById('status-btn-1');
let sb2 = document.getElementById('status-btn-2');
let sb3 = document.getElementById('status-btn-3');
let sb4 = document.getElementById('status-btn-4');
let sb5 = document.getElementById('status-btn-5');
let sb6 = document.getElementById('status-btn-6');
let sb7 = document.getElementById('status-btn-7');
let sb8 = document.getElementById('status-btn-8');

let interviewStore = document.getElementById('interview-store') ;

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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
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


    interviewCount.innerText = interviewStore.children.length ;


    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`



        document.getElementById('all-showing-btn').addEventListener('click' , function(){

            interviewStore.classList.remove('hidden');
            
            totalJobCount.innerText = `${Number(total.innerText)} Jobs `
        })
        document.getElementById('rejected-showing-btn').addEventListener('click' , function(){
            
            interviewStore.classList.add('hidden');

            totalJobCount.innerText =  `${interviewStore.children.length - interviewStore.children.length } Jobs`;

            document.getElementById('interview-showing-btn').addEventListener('click' , function(){
                interviewStore.classList.remove('hidden');
            })



            

            



        })
    } 



    )

   
    
})






 





