import { MaterialsModel } from './materials-model';
import { ColorArray } from '../../db/color-array';

export class BasicData {
  public width: number;
  public height: number;
  public kai: number;
  public guidao: MaterialsModel;
  public shuliao: MaterialsModel;
  public bianfeng: MaterialsModel;
  public boli: MaterialsModel;
  public shangxiafang: MaterialsModel;
  public banzi: MaterialsModel;
  public colorId: number;
  public kind: any;
  // 普通属性的集合，便于展示
  public materialsArray: MaterialsModel[];
  constructor(height, width, kai, colorId) {
    this.height = height;
    this.width = width;
    this.kai = kai;
    this.colorId = colorId;
  }
}
