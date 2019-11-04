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
  public key: string;
  constructor(public xb: string = "男",
    public items: Array<Item> = new Array<Item>(),
    public state:OrderState =0
  ) { }

  tjsj: string
  xgsj: string
  shsj: string
  jfsj: string


  get cost(): number {
    let cost: number = 0
    this.items.forEach(item => {
      cost += item.cost
    })
    return cost;
  }

  init(products:Array<Product>){
    for(let index in this.items){
      this.items[index] = Object.assign(new Item(null), this.items[index])
    }
    products.forEach(product=>{
      let item = this.items.find(e=>{
        return e.productId == product.id
      })
      
      if(item){                
        item.product = product
      }else{
        item = new Item(product)
        item.productId = product.id
        this.items.push(item)
      }
    })
    console.log(this.items)
    this.items = this.items.sort((a,b)=>{
      return a.productId - b.productId
    })
    console.log(this.items)

}

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
    public productId: number = 0,
    public count: number = 0,
    //public selected: boolean = false
  ) { }
  get cost() {
    return this.count * this.product.price;
  }
}

export enum OrderState{
  New=1,
  Submited,
  Modified,
  Reviewed,
  Paid
}