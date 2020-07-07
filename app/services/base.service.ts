import { Base } from "../models/base.model";
import { firebaseApp } from "../services/firebase/firebase.service";
import firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export class BaseService<T extends Base> {
  TAG: string = "BaseService";
  reference: string;

  constructor(reference: string) {
    this.reference = reference;
  }

  getAll(): Promise<T[]> {
    console.log(`${this.TAG} > getAll`);
    return new Promise((resolve, reject) => {
      console.log(`${this.TAG} > getAll > db > Promise`, this.reference);
      db.collection(`${this.reference}`)
        .get()
        .then((querySnapshot: any) => {
          // console.log(`${this.TAG} > getAll > querySnapshot`, querySnapshot);
          const entities: T[] = [];
          querySnapshot.forEach((doc: any) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            entities.push(<T>doc.data());
          });
          resolve(entities);
        })
        .catch(() => {
          console.error(`${this.TAG} > getAll > error`);
          reject();
        });
    });
  }

  public getById(id: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      db.collection(`${this.reference}`)
        .doc(`${id}`)
        .get()
        .then((doc: any) => {
          const entity: T | null = doc.exists ? <T>doc.data() : null;
          resolve(entity);
        })
        .catch(() => {
          reject();
        });
    });
  }

  public add(entity: T): Promise<boolean> {
    Base.setInitialValues(entity);
    console.log(`${this.TAG} > add > model`, entity);
    return new Promise((resolve, reject) => {
      db.collection(`${this.reference}/${entity.id}`)
        .add(entity)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  }

  public edit(entity: T): Promise<boolean> {
    Base.setValuesOnEdit(entity);
    console.log(`${this.TAG} > edit > model`, entity);
    return new Promise((resolve, reject) => {
      db.collection(`${this.reference}`)
        .doc(`${entity.id}`)
        .update(entity)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  }

  public softDelete(entity: T): Promise<boolean> {
    Base.setValuesOnDelete(entity);
    console.log(`${this.TAG} > add > softDelete`, entity);
    return new Promise((resolve, reject) => {
      db.collection(`${this.reference}`)
        .doc(`${entity.id}`)
        .update(entity)
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  }

  public hardDelete(entity: T): Promise<boolean> {
    console.log(`${this.TAG} > add > hardDelete`, entity);
    return new Promise((resolve, reject) => {
      db.collection(`${this.reference}`)
        .doc(`${entity.id}`)
        .delete()
        .then(() => {
          resolve(true);
        })
        .catch(() => {
          reject();
        });
    });
  }
}
