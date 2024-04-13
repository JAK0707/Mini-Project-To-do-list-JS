let todo=[]; // Array to store tasks

while(true){
    let req=prompt("enter the request"); // Ask user for input
    if(req == 'quit'){ // If user wants to quit
        console.log("Quit");
        break; // Exit the loop
    }
    else if(req == 'list'){ // If user wants to list tasks
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]); // Print each task with its index
        }
        console.log('--------------'); // Seperator
    }
    else if(req == 'add'){ // If user wants to add a task
        let add=prompt("enter a task"); // Ask for task description
        todo.push(add); // Add the task to the todo list array
        console.log("Task added"); // Confirm task addition
        console.log('--------------'); // Seperator
    }
    else if(req == 'delete'){ // If the user wants to delete the task
        let del=prompt("enter index no. of task"); // Ask for index of the task to delete
        todo.splice(del,1); // Remove the task at the specified index from the todo list array
        console.log("Task deleted"); // Confirm task deletion
        console.log('--------------'); // Seperator
    }
    else{ // If user enters an invalid request
        console.log("wrong request"); // Notify user of the invalid request
    }
}