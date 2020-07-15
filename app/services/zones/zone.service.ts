import { BaseService, db } from "../base.service";
import { Zone } from "../../models/zones/zone.model";

export class ZoneService extends BaseService<Zone> {
  reference: string = "zones";
  constructor() {
    super("zones");
  }
  getByCategoryId(categoryId: string): Promise<Zone[]> {
    console.log(`${this.TAG} > getAll`);
    return new Promise((resolve, reject) => {
      console.log(`${this.TAG} > getAll > db > Promise`, this.reference);
      db.collection(`${this.reference}`)
        .where(`categories.${categoryId}`, "==", true)
        .get()
        .then((querySnapshot: any) => {
          // console.log(`${this.TAG} > getAll > querySnapshot`, querySnapshot);
          const entities: Zone[] = [];
          querySnapshot.forEach((doc: any) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            entities.push(<Zone>doc.data());
          });
          resolve(entities);
        })
        .catch(() => {
          console.error(`${this.TAG} > getAll > error`);
          reject();
        });
    });
  }
}
