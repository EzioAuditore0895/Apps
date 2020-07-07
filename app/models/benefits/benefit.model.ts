import { Base } from "../base.model";

export class Benefit extends Base {
  title: string;
  description: string;
  url: string;
  discountRate: number;

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.url = "";
    this.discountRate = 0;
  }
}
