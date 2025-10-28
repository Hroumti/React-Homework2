import RenderCard from "./renderCard";

export default function Render(){
    const products = [
  { id: 1, name: 'Wireless Mechanical Keyboard', category: 'Electronics', price: 120, quantity: 15 },
  { id: 2, name: 'Noise-Cancelling Headphones', category: 'Electronics', price: 250, quantity: 8 },
  { id: 3, name: 'Organic Coffee Beans (1kg)', category: 'Grocery', price: 35, quantity: 45 },
  { id: 4, name: 'Stainless Steel Water Bottle', category: 'Home Goods', price: 20, quantity: 60 },
  { id: 5, name: '4K Smart TV (55 inch)', category: 'Electronics', price: 799, quantity: 5 },
  { id: 6, name: 'Running Shoes (Men’s)', category: 'Apparel', price: 95, quantity: 30 },
  { id: 7, name: 'Yoga Mat (Eco-Friendly)', category: 'Sports', price: 40, quantity: 22 },
  { id: 8, name: 'Portable Power Bank (20000mAh)', category: 'Electronics', price: 55, quantity: 18 },
  { id: 9, name: 'Scented Candle Set (3-pack)', category: 'Home Goods', price: 28, quantity: 50 },
  { id: 10, name: 'Fiction Novel: "The Last Code"', category: 'Books', price: 15, quantity: 75 },
  { id: 11, name: 'Electric Kettle (1.7L)', category: 'Home Goods', price: 45, quantity: 12 },
  { id: 12, name: 'Gaming Mouse Pad (XL)', category: 'Electronics', price: 25, quantity: 33 },
  { id: 13, name: 'Casual T-Shirt (Unisex)', category: 'Apparel', price: 22, quantity: 88 },
  { id: 14, name: 'Multi-Vitamin Supplements', category: 'Health', price: 30, quantity: 40 },
  { id: 15, name: 'Adjustable Office Chair', category: 'Furniture', price: 180, quantity: 9 },
  { id: 16, name: 'Bluetooth Speaker (Waterproof)', category: 'Electronics', price: 70, quantity: 25 },
  { id: 17, name: 'Whole Wheat Pasta (500g)', category: 'Grocery', price: 5, quantity: 100 },
  { id: 18, name: 'Acrylic Paint Set (24 colors)', category: 'Arts & Crafts', price: 38, quantity: 17 },
  { id: 19, name: 'Digital Camera (Mirrorless)', category: 'Electronics', price: 950, quantity: 3 },
  { id: 20, name: 'Sunglasses (Polarized)', category: 'Apparel', price: 50, quantity: 55 }
];

    return(
        <div className="render-container">
            {products&&products.map(item=>(
                <RenderCard item={item} key={item.id}/>
            ))}

        </div>
    )

   
}