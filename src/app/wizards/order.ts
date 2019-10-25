export class Order {
  public id: number;
  public xh: string;
  public xm: string;

  public csrq: string;
  public yx: string;
  public zy: string;
  public rxsj: string;
  public bysj: string;
  public lxr: string;
  public lxdh: string;

  constructor(public xb: string = "男") {}
}

export class Student {
  public xb: string;
  public csrq: string;
  public yx: string;
  public zy: string;
  public rxsj: string;
  public bysj: string;
  constructor(  public xh: string='',
  public xm: string=''
) {}
}
