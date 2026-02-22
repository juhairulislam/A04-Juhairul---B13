let total = document.getElementById('total') ;
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count')







const allBtn = document.getElementById('all-showing-btn') ;
const interviewShowingBtn = document.getElementById('interview-showing-btn');
const rejectedShowingBtn = document.getElementById('rejected-showing-btn') ;
const allCards = document.getElementById('allCards')
const noJobAvailable = document.getElementById('no-jobs-available')


// count 

function calculateCount(){
    total.innerText = allCards.children.length ;
}

calculateCount()



function noJobsAvailable(id){

    noJobAvailable.classList.remove('hidden')

    allCards.classList.add('hidden') ;


    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewShowingBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedShowingBtn.classList.remove('bg-[#3B82F6]', 'text-white');


    allBtn.classList.add('text-[#64748B]');
    interviewShowingBtn.classList.add('text-[#64748B]');
    rejectedShowingBtn.classList.add('text-[#64748B]');


    const selected = document.getElementById(id) ;

    selected.classList.remove('text-[#64748B]')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

    
}

function allJobsShowing(id){

     noJobAvailable.classList.add('hidden')

    allCards.classList.remove('hidden') ;


     allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewShowingBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedShowingBtn.classList.remove('bg-[#3B82F6]', 'text-white');


    allBtn.classList.add('text-[#64748B]');
    interviewShowingBtn.classList.add('text-[#64748B]');
    rejectedShowingBtn.classList.add('text-[#64748B]');



     const selected = document.getElementById(id) ;

    selected.classList.remove('text-[#64748B]')
    selected.classList.add('bg-[#3B82F6]', 'text-white')

}