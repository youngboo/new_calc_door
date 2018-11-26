// import { Data75zhongkongTest } from './data-75zhongkong-test';
import { Data5cm } from './data-5cm';
import { Data2cm } from './data-2cm';
import { Data80zhongkong } from './data-80zhongkong';
import { Data75zhongkong } from './data-75zhongkong';
import { BasicData } from './basic-data';

export class DataFactory {
  public data: BasicData;
  constructor(height, width, kai, kind, colorId) {
    if (0 === kind) {
      this.data = new Data75zhongkong(height, width, kai, colorId);
    } else if (1 === kind) {
      this.data = new Data80zhongkong(height, width, kai, colorId);
    } else if (2 === kind) {
      this.data = new Data2cm(height, width, kai, colorId);
    } else if (3 === kind) {
      this.data = new Data5cm(height, width, kai, colorId);
    } else if (4 === kind) {
      // this.data = new Data75zhongkongTest(height, width, kai, colorId);
    }
    // this.data.colorId = colorId;
  }
}
