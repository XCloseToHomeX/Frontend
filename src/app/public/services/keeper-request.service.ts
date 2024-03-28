import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {keeperRequest} from "../model/keeperRequest";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KeeperRequestService extends BaseService<keeperRequest>{
  constructor(http:HttpClient) {
    super(http);
    this.resourceEndpoint = '/keeperRequest';
  }
}
