export class Task {
  constructor(
    public title: string,
    public description: string,
    public dueDate: Date,
    public isCompleted: boolean
  ) {}

  updateTitle(newTitle: string) {
    this.title = newTitle;
  }

  updateDescription(newDescription: string) {
    this.description = newDescription;
  }

  markAsCompleted() {
    this.isCompleted = true;
  }
}
