import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {

  constructor() { }
  logDebug(log: string) {
    console.log(log);
  }
  logError(log: string) {
    console.error(log);
  }
}

