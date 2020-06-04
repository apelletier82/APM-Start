import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl:  './star.component.html',
    styleUrls : ['./star.component.css'] 
})

export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;

    ngOnChanges(changes: SimpleChanges): void {        
        this.starWidth = this.rating * 75 / 5;
    }    

    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    onClick() {
       this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}