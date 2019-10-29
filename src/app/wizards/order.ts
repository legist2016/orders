export class Order {
  public id: number;
  public xh: string;
  public xm: string;
  public xm_e: string

  public csrq: string;
  public yx: string;
  public zy: string;
  public rxsj: string;
  public bysj: string;
  public lxr: string;
  public lxdh: string;

  constructor(public xb: string = "男") { }
}

export class Student {
  public xb: string;
  public csrq: string;
  public yx: string;
  public zy: string;
  public rxsj: string;
  public bysj: string;
  constructor(public xh: string = '',
    public xm: string = ''
  ) { }
}

export class Product {
  public id: any
  public name: string
  public descript: String
  public price: number
}

export class Item {
  constructor(
    public product: Product,
    public count: number = 1,
    public selected: boolean = false
  ) { }
  get cost() {
    return this.count * this.product.price;
  }
}