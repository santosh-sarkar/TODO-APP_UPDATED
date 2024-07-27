let inputData = document.getElementById('task')
let addBtn = document.getElementById('btn')
let tasklist = document.querySelector('.tasklist')
let localData=[]


const getFromLocal=()=>{
    if(localStorage.getItem('tasks')!==null){
        localData=JSON.parse(localStorage.getItem('tasks'))      
    }
}
getFromLocal()

const addTask=(task)=>{
    let taskItem = document.createElement('div')
    let taskli = document.createElement('li')
    let delbtn = document.createElement('button')

    taskItem.classList.add('taskitem')
    taskli.classList.add('list')
    delbtn.classList.add('delbtn')


    tasklist.append(taskItem)
    taskItem.append(taskli,delbtn)

    taskli.textContent = task
    delbtn.textContent = 'x'

    delbtn.addEventListener('click',(e)=>{
        let task=e.target.previousElementSibling.textContent
        localData=localData.filter((e)=>{
            return e !== task
        })
        localStorage.setItem('tasks',JSON.stringify(localData))
        taskItem.remove();
     })

}


const addTOLocal=(task)=>{
    localData.push(task)
    localStorage.setItem('tasks',JSON.stringify([...new Set(localData)]))
}

localData.forEach((e)=>{
    addTask(e)
})

addBtn.addEventListener('click',()=>{
    let task = inputData.value.trim()
    if(task !=='' ){
        if (!localData.includes(task)) {         
            addTask(task)
        }
    addTOLocal(task)}
    inputData.value=''
})