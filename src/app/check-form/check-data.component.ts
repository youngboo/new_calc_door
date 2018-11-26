import { Component, OnInit } from '@angular/core';
import { CheckData } from '../model/check-data';
import { BasicData } from '../model/basic-data';
// import { Data75zhongkong } from "../model/data-75zhongkong";
// import { Data80zhongkong } from "../model/data-80zhongkong";
// import { Data2cm } from "../model/data-2cm";
// import { Data5cm } from '../model/data-5cm';
// import { Data75zhongkongTest } from '../model/data-75zhongkong-test';
import { ColorArray } from '../../db/color-array';
import { KindArray } from '../../db/kind-array';
import { DataFactory } from '../model/data-factory';
// import { Kinds } from '../model/kind';

@Component({
  selector: 'check-data-form',
  templateUrl: './check-data.component.html',
  styleUrls: ['../app.component.css']
})
// 定义高度和宽度，扇数 根据这些数据计算出各种尺寸
export class CheckDataComponent implements OnInit {
  checkData: CheckData;
  public kinds = KindArray.kindArray;
  public colorArray = ColorArray.colorArray;
  // public kinds: Kinds;
  public kaiNum = [1, 2, 3, 4];
  public data: BasicData = null;
  ngOnInit(): void {
    // this.checkData = new CheckData(1900, 900, 2, 0, 0);
  }
  onSubmit(height, width, kai, kind, color): void {
    console.log('checkData:' + JSON.stringify(this.checkData));
    // this.data = new DataFactory(height, width, kai, kind, color).data;
    this.data = new DataFactory(1900, 900, 2, 0, 0).data;
    this.checkData = new CheckData(1900, 900, 2, 0, 0);
    // console.log("表单成功提交"+JSON.stringify(checkData));
    // console.log("data："+height+","+width+","+kai+","+kind);
    console.log('data：' + JSON.stringify(this.data));
  }
  getDate(): string {
    return new Date().toLocaleDateString();
  }
}
