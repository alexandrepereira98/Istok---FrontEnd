import { Component } from '@angular/core';
import { ShoppingItem } from './model/entity';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    shoppingList: ShoppingItem[] = [] 
    item = new ShoppingItem()

    addItem() {
        this.shoppingList.push(this.item)
        this.item = new ShoppingItem()
    }
}
