import { Base } from "../base.model";

export class BenefitsZone extends Base {
  name: string;
  description: string;
  fullId: string;
  parentId: string;
  constructor() {
    super();
    this.name = "";
    this.description = "";
    this.fullId = "";
    this.parentId = "";
  }
}
