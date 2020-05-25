import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  requestName: string;
  req_id: string;

  constructor() { }
}
