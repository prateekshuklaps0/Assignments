export class Task {
  constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public isCompleted: boolean
  ) {}

  updateTitle(newTitle: string) {
    // Implement title update logic
  }

  updateDescription(newDescription: string) {
    // Implement description update logic
  }

  markAsCompleted() {
    // Implement logic to mark the task as completed
  }
}
