import { Component, OnInit } from '@angular/core';

import { ToastController } from '@ionic/angular';

import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

  temperature;
  moisture;
  hummidity;
  ph;
  historyhumidity;
  historymoisture;
  historytemperature;
  historyph;
  constructor(private toastController: ToastController, private ws:WebsocketService) { 
    this.historyhumidity = [];
    this.historymoisture = [];
    this.historytemperature = [];
    this.historyph = [];
  }

  getTemp(){
    return this.ws.getTemp();
  }

  gethumidity(){
    return this.ws.gethumidity();
  }

  getmoisture(){
    return this.ws.getmoisture();
  }

  getPh(){
    return this.ws.getPh();
  }

  ngOnInit() {
    this.temperature = 7;
    // this.moisture = 7;
    this.ph = 7;
    this.addToHistory();
  }

  addToHistory(){
    let scope = this;
    setInterval(function(){
      let temperature = scope.ws.getTemp();
      let humidity = scope.ws.gethumidity();
      let moisture = scope.ws.getmoisture();
      let ph = scope.ws.getPh();
      if(temperature){
        let date = new Date();
        let time = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate())  
          + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " 
          + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":" 
          + (date.getMinutes() < 10 ? "0" + date.getMinutes(): date.getMinutes()) + ":" 
          + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()); 
        let data = {
          timestamp: time,
          level: temperature,
          level1: humidity,
          level2: moisture,
          level3: ph,
        }
        scope.historytemperature.push(data);
      }
    }, 1000);
  }

}
