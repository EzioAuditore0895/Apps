import { Base } from "../base.model";

export class BenefitsCategory extends Base {
  name: string;
  description: string;
  imageUrl: string;

  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.imageUrl = "";
  }
}
