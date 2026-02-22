
const allBtn = document.getElementById('all-showing-btn') ;
const interviewShowingBtn = document.getElementById('interview-showing-btn');
const rejectedShowingBtn = document.getElementById('rejected-showing-btn') ;
const allCards = document.getElementById('allCards')
const noJobAvailable = document.getElementById('no-jobs-available')



function noJobsAvailable(id){


    const selected = document.getElementById(id) ;

    noJobAvailable.classList.remove('hidden')

    allCards.classList.add('hidden') ;

    
}

function allJobsShowing(id){

     noJobAvailable.classList.add('hidden')

    allCards.classList.remove('hidden') ;

}