// step-definitions/homepage.ts
import { Given, When, Then, formatterHelpers } from "@cucumber/cucumber";
import assert from "assert";
import { OurWorld } from "../types";
import {itemPrice,items,currency} from "../helper";
// import {actualTableNumber} from "../step-definitions/homepage";
const { selectors, firefox } = require('playwright');

var num= 0;
let orderedItems:string[] = [];
let price:number = 0;
declare global {
  var actualTableNumber: number;
}

// var itemPrice:number;
When("I pick {string}", async function (this: OurWorld, text: string) {
  await this.page.waitForTimeout(1000);
  await this.page.waitForSelector('text="'+text+'"',{timeout: 6000});
  await this.page.click('text="'+text+'"');
  // await this.page.waitForSelector('css=div >> text=Add to cart',{timeout: 6000});
});

When("I pick {string} with {string} and {string} qty {int}", async function (this: OurWorld, p1: string, p2: string, p3: string, qty: number) {
  await this.page.waitForSelector('text="'+p1+'"');
  await this.page.click('text="'+p1+'"');
  await this.page.click('text="'+p2+'"');
  await this.page.keyboard.press('PageDown');
  await this.page.click('text="'+p3+'"');

  var itemList:string[]= [p1,p2,p3];
  orderedItems=orderedItems.concat(items(itemList,qty));
  var p = itemPrice(itemList,qty);
  price = price + p;

  //Loop for food quantity
    for(var i = 1; i < qty; i++) {
    await this.page.click('button[aria-label="Add one"]');
     }

  await this.page.click('text="Add to cart"');
  num++;
});

// 3 add ons
When("I pick {string} with {string} and {string} and {string} qty {int}", async function (this: OurWorld, p1: string, p2: string, p3: string, p4: string, qty: number) {
  await this.page.waitForSelector('text="'+p1+'"');
  await this.page.click('text="'+p1+'"');
  await this.page.click('text="'+p2+'"');
  await this.page.keyboard.press('PageDown');
  await this.page.click('text="'+p3+'"');
  await this.page.click('text="'+p4+'"');

  var itemList:string[]= [p1,p2,p3,p4];
  orderedItems=orderedItems.concat(items(itemList,qty));
  var p = itemPrice(itemList,qty);
  price = price + p;

  //Loop for food quantity
    for(var i = 1; i < qty; i++) {
      await this.page.click('button[aria-label="Add one"]');
     }

  await this.page.click('text="Add to cart"');
  num++;
});

// 1 add ons
When("I pick {string} with {string} qty {int}", async function (this: OurWorld, p1: string, p2: string, qty: number) {
  await this.page.waitForSelector('text="'+p1+'"');
  await this.page.click('text="'+p1+'"');
  await this.page.click('text="'+p2+'"');

  var itemList:string[]= [p1,p2];
  orderedItems=orderedItems.concat(items(itemList,qty));
  var p = itemPrice(itemList,qty);
  price = price + p;

  //Loop for food quantity
    for(var i = 1; i < qty; i++) {
      await this.page.click('button[aria-label="Add one"]');
     }

  await this.page.click('text="Add to cart"');
  num++;
});

// no add ons
When("I pick {string} qty {int}", async function (this: OurWorld, p1: string, qty: number) {
  await this.page.keyboard.press('PageDown');
  await this.page.waitForSelector('text="'+p1+'"'); 
  await this.page.click('text="'+p1+'"');

  var itemList:string[]= [p1];
  orderedItems=orderedItems.concat(items(itemList,qty));
  var p = itemPrice(itemList,qty);
  price = price + p;

    for(var i = 1; i < qty; i++) {
    await this.page.click('button[aria-label="Add one"]');
     }

  await this.page.waitForSelector('xpath=//*[@id="__next"]/div[1]/div[3]/div/div[3]/form/div/div/div[2]/div/div/div[2]/button',{timeout:10000}); 
  await this.page.click('xpath=//*[@id="__next"]/div[1]/div[3]/div/div[3]/form/div/div/div[2]/div/div/div[2]/button');

  num++;
});

When("Click Lunch til 3pm button and table number {string}", async function (this: OurWorld, text: string) {
  // Click input[name="tableNumber"]
  await this.page.waitForSelector('input[name="tableNumber"]',{timeout: 5000});
  await this.page.click('input[name="tableNumber"]');
  // Fill input[name="tableNumber"]
  await this.page.fill('input[name="tableNumber"]', text);
 //  eval("actualTableNumber = '"+text+"';");
  actualTableNumber = Number(text);
  // Click text="Confirm"
  await this.page.waitForSelector('text="Confirm"',{timeout: 5000});
  await this.page.click('text="Confirm"');
  await this.page.waitForSelector('xpath=//*[@id="__next"]/div[1]/div[4]/div[2]/div/a[2]',{timeout: 5000});
  await this.page.click('xpath=//*[@id="__next"]/div[1]/div[4]/div[2]/div/a[2]');

});

When("Click Drinks button and table number {string}", async function (this: OurWorld, text: string) {
  // Click input[name="tableNumber"]
  await this.page.waitForSelector('input[name="tableNumber"]',{timeout: 5000});
  await this.page.click('input[name="tableNumber"]');
  // Fill input[name="tableNumber"]
  await this.page.fill('input[name="tableNumber"]', text);
  globalThis.actualTableNumber = Number(text);
  // Click text="Confirm"
  await this.page.waitForSelector('text="Confirm"',{timeout: 5000});
  await this.page.click('text="Confirm"');
  await this.page.waitForSelector('xpath=//*[@id="__next"]/div[1]/div[4]/div[2]/div/a[1]',{timeout: 5000});
  await this.page.click('xpath=//*[@id="__next"]/div[1]/div[4]/div[2]/div/a[1]');
 
 //  assert.equal(this.page.url(), 'https://staging.mryum.com/demo/dine-in/dining-in');
});

//validation
When("I click the Cart", async function(this: OurWorld){
  // await page.click('text="Cart"');
  await this.page.waitForSelector('xpath=/html/body/div/div[1]/div[2]/div[1]/div');
  await this.page.click('xpath=/html/body/div/div[1]/div[2]/div[1]/div');
  // get the value per Div Item
  //Per intance of div validate
  this.page.waitForTimeout(10000);

  // Delete strings that isn't included in validation
  var ItemValues = await this.page.textContent('xpath=//*[@id="__next"]/div[1]/div[4]/div/div/div[2]');
  var Itemvalues = "test";
  if(ItemValues!=null)
  {
    Itemvalues = ItemValues;
  }
  var splitted1 = Itemvalues.split("Delete");
  var splitted = new Array(num);
  for(var m = 0; m < num;m++)
  {
    splitted[m]= splitted1[m+1];
  }
  var totalprice:number = 0;
  var item ="";

  
  let products:string[] = [];
  for(var i = 0; i < num;i++)
  {
    splitted[i] = splitted[i].replace("Check Indeterminate"," ");
    splitted[i] = splitted[i].replace("Plus"," ");
    var appPrice = splitted[i].substring(
      splitted[i].lastIndexOf("$") + 1, 
      splitted[i].lastIndexOf(".")
    );
    splitted[i] = splitted[i].replace(appPrice,"");
    splitted[i] = splitted[i].replace("$","");
    splitted[i] = splitted[i].replace(".00","");
    totalprice = totalprice+Number(appPrice);
    splitted[i] = splitted[i].slice(0, -1);
    var items = splitted[i].split("x");
    var qty = items[0].charAt(items[0].length-1);
    for(var n = 0; n < items.length;n++)
    {
      items[n] =  items[n].replace(/^\s+|\s+$/gm,"");
      items[n] = items[n].slice(0, -1);
      items[n] =  items[n].replace(/^\s+|\s+$/gm,"");
      items[n] = items[n]+" "+qty;
      products.push(items[n]);
      
    }
  }
  // products.push("$"+totalprice+".00");
  
  

  console.log(products.sort());
  console.log(orderedItems.sort());
  //validate items
  //ModORUpgradeORUpsell, Item, Correct Number of Items, Item
  assert.notStrictEqual(products.sort(),orderedItems.sort(),"Items not equal");

  //$
  // var actualTotalPrice = currency(totalprice);
  // var expectedTotalPrice = currency(price); 
  // assert.strictEqual(expectedTotalPrice,actualTotalPrice,"Price not equal");
  await this.page.screenshot({ path:'..testData/screenshot'+Date.now()+'.png' });

  //table number
  // var expextedTableNumber ="test";
  var value = await this.page.textContent('xpath=//*[@id="__next"]/div[1]/div[4]/div/div/div[1]/button/div/div/div/p');
  var expextedTableNumbers;
  try   
  {
    if(value!=null)
    {
       expextedTableNumbers = value.replace('Table number ',"");
       expextedTableNumbers = expextedTableNumbers.replace(/^\s+|\s+$/gm,"");
    }
  }
  catch(Error)
  {
    console.log(Error);
  }
  assert.strictEqual(Number(expextedTableNumbers),globalThis.actualTableNumber);
  

});



  