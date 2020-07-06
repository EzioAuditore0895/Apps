export interface IBaseCallback {
  onSuccess(): any;
  onError(): any;
  onResults(results: any[]): any;
  onResult(result: any | null): any;
}
