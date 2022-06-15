import { Component, OnInit , ViewChild } from '@angular/core';
import { getDefaultFormatCodeSettings } from 'typescript';
import { PredictionsService } from '../../shared/services/predictions.service';
import { Storage } from "@aws-amplify/storage";

@Component({
  selector: 'app-prediction-engine',
  templateUrl: './prediction-engine.component.html',
  styleUrls: ['./prediction-engine.component.scss']
})
export class PredictionEngineComponent implements OnInit {

  folderNames = [];
  datasetModel = '';
  dataset = '';

  @ViewChild('f') form: any;

  constructor(
    private predictionService: PredictionsService,
  ) { }

  ngOnInit(): void {
    this.getDatasets();
  }

  getDatasets(){
     
    Storage.list('')
    .then(data => {
      var datalist = data;
      for(var i=2;i<datalist.length;i++){
        var x = datalist[i].key.slice(12);
        var y = x.split("/");
        var z = y[0];
        this.folderNames.push(z);
      }
    })
    .catch(err => console.log(err));
  }

  save(){
   
    //   this.predictionService.getPrediction().subscribe((result: { data: any[]; }) => {
    //   console.log(result);
    // });
   
  }

}
