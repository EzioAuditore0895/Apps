import * as uuid from "uuid";

export class Base {
  id: string;
  registerDate: Date | null;
  registerBy: string;
  updatedDate: Date | null;
  updatedBy: string;
  deletedDate: Date | null;
  deletedBy: string;
  isDeleted: boolean;

  constructor() {
    this.id = uuid.v4();
    this.registerDate = new Date();
    this.registerBy = "Anonymous";
    this.updatedDate = new Date();
    this.updatedBy = "Anonymous";
    this.deletedDate = null;
    this.deletedBy = "";
    this.isDeleted = false;
  }
}
