import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from '../../pages/addshop/models/shopping-item/shopping-item.interface';

/*
  Generated class for the SlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SlistProvider {
data:any;
com = 0;
  private shoppingListRef = this.db.list<Item>('khuthi');
  constructor(private db:AngularFireDatabase) {}
   getShoppingList()
   {
return this.shoppingListRef;
   }
  
addItem(item:Item)
{

console.log(item)
return this.shoppingListRef.push(item);
}

editItem(item:Item)
{
  return this.shoppingListRef.update(item.key,item)
}
removeItem(item:Item)
{
return this.shoppingListRef.remove(item.key)
}

}
