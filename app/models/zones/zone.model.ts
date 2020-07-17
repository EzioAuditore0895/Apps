import { Base } from "../base.model";

export class Zone extends Base {
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
