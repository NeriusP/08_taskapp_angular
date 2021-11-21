export class TaskService {
   public tasks = [
      {
         project: "One",
           description: "Sukurti kontaktinę formą klientams"
      },
      {
         project: "Two",
         description: "Sukurti kontaktų puslapį ir pažūrėti kodėl neveikia žemėlapis"
      },
      {
         project: "One",
         description: "Į puslapį įdėti google analitics"
      },
      {
         project: "Three",
         description: "About puslapis blogai veikia, jį reikia pataisyti"
      }
   ];

  public removeProject(projectId){
      this.tasks.splice(projectId, 1);
   }

   public addProject(taskName: string, taskDescription: string){
      this.tasks.push({
         project: taskName,
         description: taskDescription
      });
   }
}

