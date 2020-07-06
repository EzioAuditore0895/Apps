import { Base } from "../models/base.model";
import { firebaseApp } from "../services/firebase/firebase.service";
import firebase from "firebase";
import "firebase/firestore";
import { BaseCallback } from "./base.callback";

const db = firebase.firestore(firebaseApp);

export class BaseService<T extends Base> {
  TAG: string = "BaseService";
  reference: string;

  constructor(reference: string) {
    this.reference = reference;
  }

  getAll(callback: BaseCallback<T>): void {
    db.collection(`${this.reference}`)
      .get()
      .then((querySnapshot) => {
        const entities: T[] = [];
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          entities.push(<T>doc.data());
        });
        if (callback) {
          callback.onResults(entities);
        }
      })
      .catch(() => {
        if (callback) {
          callback.onError();
        }
      });
  }

  public getById(id: string, callback: BaseCallback<T>): void {
    db.collection(`${this.reference}`)
      .doc(`${id}`)
      .get()
      .then((doc) => {
        const entity: T | null = doc.exists ? <T>doc.data() : null;
        if (callback) {
          callback.onResult(entity);
        }
      })
      .catch(() => {
        if (callback) {
          callback.onError();
        }
      });
  }

  public add(entity: T, callback: BaseCallback<T>): void {
    Base.setInitialValues(entity);
    console.log(`${this.TAG} > add > model`, entity);
    db.collection(`${this.reference}/${entity.id}`)
      .add(entity)
      .then(() => {
        if (callback) {
          callback.onSuccess();
        }
      })
      .catch(() => {
        if (callback) {
          callback.onError();
        }
      });
  }

  public edit(entity: T, callback: BaseCallback<T>): void {
    Base.setValuesOnEdit(entity);
    console.log(`${this.TAG} > edit > model`, entity);
    db.collection(`${this.reference}`)
      .doc(`${entity.id}`)
      .update(entity)
      .then(() => {
        if (callback) {
          callback.onSuccess();
        }
      })
      .catch(() => {
        if (callback) {
          callback.onError();
        }
      });
  }

  public softDelete(entity: T, callback: BaseCallback<T>): void {
    Base.setValuesOnDelete(entity);
    console.log(`${this.TAG} > add > softDelete`, entity);
    db.collection(`${this.reference}`)
      .doc(`${entity.id}`)
      .update(entity)
      .then(() => {
        if (callback) {
          callback.onSuccess();
        }
      })
      .catch(() => {
        if (callback) {
          callback.onError();
        }
      });
  }

  public hardDelete(entity: T, callback: BaseCallback<T>): void {
    console.log(`${this.TAG} > add > hardDelete`, entity);
    db.collection(`${this.reference}`)
      .doc(`${entity.id}`)
      .delete()
      .then(() => {
        if (callback) {
          callback.onSuccess();
        }
      })
      .catch(() => {
        if (callback) {
          callback.onError();
        }
      });
  }
}
