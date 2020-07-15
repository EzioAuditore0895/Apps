import { Base } from "../base.model";

export class Discount extends Base {
  title: string;
  description: string;
  discountRate: number;
  imageUrl: string;

  constructor() {
    super();
    this.title = "";
    this.description = "";
    this.discountRate = 0;
    this.imageUrl = "";
  }
}
