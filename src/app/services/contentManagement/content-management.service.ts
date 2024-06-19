import { Injectable } from '@angular/core';
import { ElderlyService } from '../elderly/elderly.service';

@Injectable({
  providedIn: 'root'
})
export class ContentManagementService {

  constructor(private elderlyService: ElderlyService) { }
  //////////////////// ELDERLY PART ////////////////////
  getAllElderlies() {
    return this.elderlyService.getAllElderlies;
  }

  getElderlyById(id: string) {
    return this.elderlyService.getElderlyById(id);
  }
}
