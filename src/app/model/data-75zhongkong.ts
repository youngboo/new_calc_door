import { BasicData } from './basic-data';
import { MaterialsModel } from './materials-model';

/**
 * 75中空门
 */
export class Data75zhongkong extends BasicData {
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
    if (kai === 1) {
      this.shangxiafang.height = width;
    } else if (kai === 2) {
      this.shangxiafang.height = (width - this.bianfeng.width + 75) / kai;
    } else if (kai === 3 || kai === 4) {
      console.log('开数:' + kai);
      this.shangxiafang.height = (width - this.bianfeng.width + 150) / kai;
    } else {
      throw new Error('无法支持的开数');
    }
    // 玻璃
    this.boli = new MaterialsModel('玻璃');
    this.boli.height = this.shuliao.height - 150 + 25;
    this.boli.width = this.shangxiafang.height - 150 + 25;
    this.boli.num = kai * 2;

    // 沟渠

    // 把可以遍历的普通属性放到集合里
    this.materialsArray = [];
    this.materialsArray.push(
      this.bianfeng,
      this.shangxiafang,
      this.shuliao,
      this.guidao
    );
  }
}
