import { Component, OnInit } from '@angular/core'
import { IProduct } from './productInterface';
import { ProdcutService } from './product.service';

@Component({
    selector:'pm-productList',
    templateUrl:'./productList.component.html',
    styleUrls: ['./productList.component.css'],
    providers: [ProdcutService]
})

export class ProductListComponent 
    implements OnInit {
    
    private _listFilter = '';
    
    pageTitle: string = 'Product List';
    imageWidth: number = 50
    imageMargin: number = 2;
    imageDisplayed: boolean = false;
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private productService: ProdcutService) {
        
    }

    performFilter(filterValue: string): IProduct[] {
        filterValue = filterValue.toLocaleLowerCase();
        return this.products.filter((p: IProduct) => 
            p.productName.toLocaleLowerCase().indexOf(filterValue) !==-1);
    }

    onShowImageClick(): void {
        this.imageDisplayed = !this.imageDisplayed;
    }

    ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
      this.listFilter = 'cart';
    }

    onRatingClicked(message: string): void { 
      this.pageTitle = 'Product list: ' + message;
    }  
}