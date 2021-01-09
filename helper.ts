
export function itemPrice(p1:string[],n1:number) 
{   
    let price:number = 0;
    for(let i = 0; i<p1.length;i++)
    {
        switch(p1[i])
        {
            case "Matcha Latte": { 
                price = price + 4.5;
                break; 
             } 
             case "Latte": { 
               price = price + 4.5;
               break; 
              } 
             case "Mocha": { 
               price = price + 4.5;
               break; 
              } 
             case "Oat Milk": { 
                price = price + .5; 
                break; 
              } 
             case "Soy Milk": { 
               price = price + .5; 
               break; 
              }
             case "Almond Milk": { 
               price = price + .5; 
               break; 
              }
             case "Laneway Lager By Stomping Ground": { 
                price = price + 10; 
                break; 
               } 
              case "Gipps St Pale Ale By Stomping Ground": { 
               price = price + 10; 
               break; 
               }
              case "Watermelon Smash Sour By Stomping Ground": { 
               price = price + 10; 
               break; 
               }
             case "Sweet Potato Chips": { 
                price = price + 9; 
                break; 
             } 
             case "Potato Chips": { 
                price = price + 10; 
                break; 
             } 
             case "House Red Gls": { 
                 if(p1[i]=="Glass")
                 {
                    price = price + 9;
                 }
                 else{
                    price = price + 38;
                 }
                 
                break; 
              } 
              case "House White Gls": { 
               if(p1[i]=="Glass")
               {
                  price = price + 9;
               }
               else{
                  price = price + 38;
               }
               break; 
               } 
               case "House Rose": { 
                price = price + 9; 
                break; 
               } 
        }
    }

    price = price * n1;
    return price;
}

export function items(p1:string[],n1:number) 
{ 
    let orderedItems:string[] = []
    for(let i = 0; i<p1.length;i++)
    {
        orderedItems.push(p1[i]+" "+n1);
    }
    return orderedItems;
}

export function currency(p1:number) 
{ 
   var value;
   if(p1%1==0)
   {
      value = "$"+p1+".00"
   }
   else{
      value = "$"+p1;
   }
   return value;
}