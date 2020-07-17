import { Benefit } from "./../../models/benefits/benefit.model";
import { BaseService, db } from "../base.service";

export class BenefitService extends BaseService<Benefit> {
  reference: string = "benefits";
  constructor() {
    super("benefits");
  }
  getByZoneId(zoneId: string): Promise<Benefit[]> {
    console.log(`${this.TAG} > getByZoneId`);
    return new Promise((resolve, reject) => {
      console.log(`${this.TAG} > getByZoneId > db > Promise`, this.reference);
      db.collection(`${this.reference}`)
        .where(`zones.${zoneId}`, "==", true)
        .get()
        .then((querySnapshot: any) => {
          // console.log(`${this.TAG} > getByZoneId > querySnapshot`, querySnapshot);
          const entities: Benefit[] = [];
          querySnapshot.forEach((doc: any) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            entities.push(<Benefit>doc.data());
          });
          resolve(entities);
        })
        .catch(() => {
          console.error(`${this.TAG} > getByZoneId > error`);
          reject();
        });
    });
  }
}
