/*
  料子的属性模型
 */
export class MaterialsModel {
  public height: number;
  public width: number;
  public num: number;
  public unit: string;
  public name: string;
  constructor(name) {
    this.name = name;
    this.unit = '个';
  }
}
