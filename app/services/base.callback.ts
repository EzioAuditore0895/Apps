import { IBaseCallback } from "./i-base.callback";
import { Base } from "../models/base.model";

export class BaseCallback<T extends Base> implements IBaseCallback {
  TAG: string = "BaseCallback";
  onSuccess() {
    console.log(`${this.TAG} > onSuccess`);
  }
  onError() {
    console.error(`${this.TAG} > onSuccess`);
  }
  onResults(results: T[]) {
    console.error(`${this.TAG} > onResults > results`, results);
  }
  onResult(result: T | null) {
    console.error(`${this.TAG} > onResult > result`, result);
  }
}
