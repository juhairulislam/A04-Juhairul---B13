
let sb1 = document.getElementById('status-btn-1');

let interviewStore = document.getElementById('interview-store') ;

let totalJobCount = document.getElementById('total-job-count')


const divCreate = document.createElement('div')





document.getElementById('interview-btn-1').addEventListener('click', function () {

    card1.classList.add('border-l-4', 'border-l-green-400')

    sb1.innerText = 'INTERVIEW'

    sb1.classList.add('btn', 'btn-outline', 'btn-accent', 'bg-green-100');

    let divCreate = card1.innerHTML;
    interviewStore.innerHTML = divCreate;


    interviewCount.innerText = interviewStore.children.length ;

    document.getElementById('interview-showing-btn').addEventListener('click', function (event) {

        noJobAvailable.classList.add('hidden');
        interviewStore.classList.remove('hidden');

        totalJobCount.innerText =  `${interviewStore.children.length} of 8 Jobs`
        

    } 



    )
    



})


