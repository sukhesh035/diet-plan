import { Component } from '@angular/core';
import csvjson from './data/csvjson.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bmiResult: number | any = 0.0;
  height: number = null;
  weight: number = null;
  calorieValue: number = 0;
  finalResultToDisplay:any = [];
  totalCarbs: any = 0;
  resultCalorieValue: any = 0;

  constructor() { }

  calculateBmi() {
    this.bmiResult = (this.weight / (this.height * this.height)).toFixed();

    this.calculateCalories(this.bmiResult)
  }


  calculateCalories(bmi) {
    switch (true) {
      case (bmi > 0 && bmi <= 18.5):
        this.calorieValue = 3300;
        break;
      case (bmi > 18.5 && bmi <= 24.9):
        this.calorieValue = 2200;
        break;
      case (bmi > 24.9 && bmi <= 29.9):
        this.calorieValue = 1400;
        break;
      case (bmi > 29.9):
        this.calorieValue = 1000;
        break;
      default:
        break;
    }

    this.getItems(this.calorieValue)
  }

  getItems(calorieValue) {
    const breakfast = calorieValue*0.25;
    const lunch = calorieValue*0.50;
    const dinner = calorieValue*0.25;

    const breakfastList = this.getFoodResults('Breakfast', breakfast)
    const lunchList = this.getFoodResults('Main', lunch)
    const drinkList = this.getFoodResults('Dinner', dinner)

    this.finalResultToDisplay = breakfastList.concat(lunchList, drinkList);
    this.totalCarbs = (this.finalResultToDisplay.reduce((acc, obj) => {return acc + obj.carbs},0)).toFixed(1);
    this.resultCalorieValue = (this.finalResultToDisplay.reduce((acc, obj) => {return acc + obj.totalCals},0)).toFixed(1);
  }

  getFoodResults (key, ratio) {
    const itemList = csvjson.filter(obj => obj.optaType === key)

    let currCalorieCount = 0;
    let resultArray = [];

    for(var i=0 ; i<itemList.length ; i++) {
      const randomEle = itemList[Math.floor(Math.random()*itemList.length)];
      if(currCalorieCount < ratio && currCalorieCount + randomEle.totalCals < ratio) {
        currCalorieCount = currCalorieCount + randomEle.totalCals;
        resultArray.push(randomEle)
      }
    }
    return resultArray;
  }

}
