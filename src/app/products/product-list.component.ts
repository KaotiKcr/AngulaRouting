import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: "products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  showImage: boolean = false;

  private _listFilter: string = "";
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];
  //constructor(private productService: ProductService) {}
  ngOnInit(): void {
    //this.products = this.productService.getProducts();
    this.products = [
        {
            "productId": 2,
            "productName":"Gaming PC",
            "productCode":"KAOTIK-001",
            "releaseDate":new Date().setDate(new Date().getDate()+0),
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
            "price":2032.3,        
            "starRating":4.2,
            "imageURL":"http://admin-demo.nopcommerce.com/images/thumbs/0000022_digital-storm-vanquish-3-custom-performance-pc.jpeg",
    
        },
        {
            "productId": 3,
            "productName":"Night Visions",
            "productCode":"KAOTIK-003",
            "releaseDate":new Date().setDate(new Date().getDate()+1),
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
            "price":58.3,        
            "starRating":3.5,
            "imageURL":"http://admin-demo.nopcommerce.com/images/thumbs/0000065_night-visions.jpeg",
    
        },   
        {
            "productId": 5,
            "productName":"Camera Photo",
            "productCode":"KAOTIK-002",
            "releaseDate":new Date().setDate(new Date().getDate()+1),
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
            "price":388.3,        
            "starRating":4.5,
            "imageURL":"http://admin-demo.nopcommerce.com/images/thumbs/0000037_canon-digital-slr-camera-black.jpeg",
    
        }    
    ];
    this.filteredProducts = this.products;
    this.listFilter = "";
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }
}
