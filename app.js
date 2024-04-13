let todo=[];

while(true){
    let req=prompt("enter the request");
    if(req == 'quit'){
        console.log("Quit");
        break;
    }
    else if(req == 'list'){
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log('--------------');
    }
    else if(req == 'add'){
        let add=prompt("enter a task");
        todo.push(add);
        console.log("Task added");
        console.log('--------------');
    }
    else if(req == 'delete'){
        let del=prompt("enter index no. of task");
        todo.splice(del,1);
        console.log("Task deleted");
        console.log('--------------');
    }
    else{
        console.log("wrong request");
    }
}