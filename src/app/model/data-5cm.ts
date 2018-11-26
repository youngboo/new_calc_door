import { BasicData } from './basic-data';
import { MaterialsModel } from './materials-model';

/**
 * 5公分
 */
export class Data5cm extends BasicData {
  constructor(height, width, kai, colorId) {
    super(height, width, kai, colorId);

    try {
      height = <number>height;
      width = <number>width;
      kai = <number>kai;
    } catch (e) {
      throw new Error('请输入数字');
    }
    // 边封
    this.bianfeng = new MaterialsModel('边封');
    this.bianfeng.width = 45;
    this.bianfeng.height = height;
    this.bianfeng.num = 2;
    // 竖料
    this.shuliao = new MaterialsModel('竖料');
    this.shuliao.height = height - 35;
    this.shuliao.num = kai * 2;
    // 轨道
    this.guidao = new MaterialsModel('轨道');
    this.guidao.height = width - this.bianfeng.width;
    this.guidao.num = 1;
    // 上下方
    this.shangxiafang = new MaterialsModel('上下方');
    this.shangxiafang.unit = '套';
    this.shangxiafang.num = kai;
    if (kai == 1) {
      this.shangxiafang.height = width;
    } else if (kai == 2) {
      this.shangxiafang.height = (width - 150) / kai;
    } else if (kai == 3) {
      this.shangxiafang.height = (width - 200) / kai;
    } else if (kai == 4) {
      this.shangxiafang.height = (width - 300) / kai;
    } else {
      throw new Error('无法支持的开数');
    }
    //板子
    this.banzi = new MaterialsModel('三圆板');
    this.banzi.height = Math.round((height - 300) / 128);
    this.banzi.width = this.shangxiafang.height + 15;
    this.banzi.num = kai;

    //把可以遍历的普通属性放到集合里
    this.materialsArray = [];
    this.materialsArray.push(this.shangxiafang, this.shuliao, this.guidao);
  }
}
