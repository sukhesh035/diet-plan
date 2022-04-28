import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dailyCarbs: any = null; //kcal
  bloodSugar: any = null;
  targetSugars: any = 100;
  carbsRatio: any = 20;

  insulinUnits: any = null;
  constructor() { }

  calculateInsulin() {
    const sugarInsulin = (this.bloodSugar - this.targetSugars) / 100;
    const carbsInsulin = this.dailyCarbs / this.carbsRatio;
    this.insulinUnits = sugarInsulin + carbsInsulin;
  }
}
