import { Base } from "../base.model";

export class Benefit extends Base {
  title: string;
  description: string;

  constructor() {
    super();
    this.title = "";
    this.description = "";
  }
}
