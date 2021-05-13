export class Task {
  private _description: string;

  private _timeSpent: string;

  constructor(description: string, timeSpent: string) {
    this._description = description;
    this._timeSpent = timeSpent;
  }

  get description() {
    return this._description;
  }

  get timeSpent() {
    return this._timeSpent;
  }
}
