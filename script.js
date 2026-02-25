let currentTab = 'all';

const tabActive = ['bg-[#3B82F6]', 'text-white'];
const tabInactive = ['bg-transparent', 'text-[#64748B]'];



const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById('interview-container');
const rejectedContainer = document.getElementById('reject-container');
const emptyStat = document.getElementById('no-jobs-available')



function switchTab(tab) {

    const tabs = ['all', 'interview', 'rejected'];
    currentTab = tab ;

    for (const t of tabs) {

        const tabName = document.getElementById('tab-' + t);

        if (t === tab) {
            tabName.classList.remove(...tabInactive);
            tabName.classList.add(...tabActive)
        } else {
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInactive)
        }

    }

    const pages = [allContainer, interviewContainer, rejectedContainer];

    for (const section of pages) {

        section.classList.add('hidden')

    }

    emptyStat.classList.add('hidden')

    if (tab === 'all') {
        allContainer.classList.remove('hidden');
        if(allContainer.children.length < 1){
                emptyStat.classList.remove('hidden')

        }
    }
    else if (tab === 'interview') {

        interviewContainer.classList.remove('hidden') ;

        if(interviewContainer.children.length < 1){
                emptyStat.classList.remove('hidden')

        }

    }
    else {
        rejectedContainer.classList.remove('hidden') ;

        if( rejectedContainer.children.length < 1){
                emptyStat.classList.remove('hidden')

        }
    }

    updateStat() ;

}
  

// stat update
const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const availableStat = document.getElementById('available')


switchTab(currentTab)



document.getElementById('job-container').addEventListener('click', function (event) {

    const clickedElement = event.target;

    const card = clickedElement.closest('.card');
    const parent = card.parentNode ;

    const status = card.querySelector('#status')



    if (clickedElement.classList.contains('interview')) {

        status.innerText = 'INTERVIEW' ;

        interviewContainer.appendChild(card);

        updateStat() ;

    }
    if (clickedElement.classList.contains('rejected')) {


        status.innerText = 'REJECTED' ;

        rejectedContainer.appendChild(card);
        updateStat() ;
    }
    if (clickedElement.classList.contains('delete')) {

        alert('Are You Sure ?') ;

        parent.removeChild(card) ;

        updateStat() ;


    }

})



// update count 

function updateStat(){

    totalCount.innerText = allContainer.children.length;
    interviewCount.innerText = interviewContainer.children.length;
    rejectedCount.innerText = rejectedContainer.children.length;

    const counts = {
        all : allContainer.children.length ,
        interview : interviewContainer.children.length ,
        rejected : rejectedContainer.children.length ,
    } ;

    totalCount.innerText = counts['all'] ;
     interviewCount.innerText = counts['interview'] ;

      rejectedCount.innerText = counts['rejected'] ;
      availableStat.innerText = counts[currentTab] ;

      if(counts[currentTab] < 1){

         emptyStat.classList.remove('hidden')

      } else{
         emptyStat.classList.add('hidden')
      }




}

updateStat() ;