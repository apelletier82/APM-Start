import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router' 
import { IProduct } from './productInterface';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  onBack(): void {
    this.router.navigate(['/products']);  
  }
  ngOnInit(): void {
    let id: number = +this.activeRoute.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-001',
      'releaseDate': 'March 19, 2019',
      'description': 'Leaf rake with 48-inch wooden handle',
      'price':19.85,
      'starRating':3.1,
      'imageUrl': 'assets/images/leaf_rake.png'      
    }
  }

}
