import * as uuid from "uuid";

export class Base {
  id: string;
  registerDate: Date;
  registerBy: string;
  updatedDate: Date;
  updatedBy: string;
  deletedDate: Date | null;
  deletedBy: string | null;
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

  public static setInitialValues(model: Base): void {
    model.registerDate = new Date();
    model.registerBy = "Anonymous"; // TODO Obtener el Uid del usuario logueado
    model.updatedDate = new Date();
    model.updatedBy = "Anonymous"; // TODO Obtener el Uid del usuario logueado
    model.deletedDate = null;
    model.deletedBy = null;
    model.isDeleted = false;
  }

  public static setValuesOnEdit(model: Base): void {
    model.updatedDate = new Date();
    model.updatedBy = "Anonymous"; // TODO Obtener el Uid del usuario logueado
  }

  public static setValuesOnDelete(model: Base): void {
    model.deletedDate = new Date();
    model.deletedBy = "Anonymous"; // TODO Obtener el Uid del usuario logueado
    model.isDeleted = true;
  }
}
