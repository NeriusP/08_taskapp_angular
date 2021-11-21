import { AddTaskComponent } from "./tasks/add-task/add-task.component"

export class UsersService {
  public users = [
    {
      name: "Jonas",
      surname: "Jonaitis",
      tasks: [
        {
          project: "Two",
          description: "Prekių kataloge blogai rodo aprašymą"
        }
      ]
    },
    {
      name: "Antanas",
      surname: "Petraitis",
      tasks: []
    },
    {
      name: "Kazys",
      surname: "Biliunas",
      tasks: []
    }
  ]


public addTask(userIndex: number, taskName: string, taskDescription: string) {
  this.users[userIndex].tasks.push({
      project: taskName,
      description: taskDescription
  })
}

public addUser(userName: string, userSurname: string) {
  this.users.push({
    name: userName,
    surname: userSurname,
    tasks: []
  })
}

}