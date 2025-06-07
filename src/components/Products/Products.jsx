import { useEffect , useState } from 'react'
import Product from '../Product/Product'

function Products({addToCartData}) {

    // products নামের একটি স্টেট তৈরি করা হয়েছে যেটাতে সব প্রোডাক্টের ডেটা রাখা হবে
    const [products , setProducts] = useState([]) // সব প্রোডাক্ট products অ্যারে-তে যোগ হবে

    // কম্পোনেন্টটি প্রথমবার লোড হলে (mount হলে) fakeData.json ফাইল থেকে ডেটা আনা হবে
    useEffect(() => {
        fetch('fakeData.json') // ফেক ডেটা ফাইল থেকে ডেটা ফেচ করা হচ্ছে
        .then(res => res.json()) // রেসপন্সকে JSON এ কনভার্ট করা হচ্ছে
        .then(data => setProducts(data)) // ফেচ করা ডেটাকে products স্টেটে সেট করা হচ্ছে
    }, [])

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                // প্রতিটি প্রোডাক্টের জন্য আলাদা করে <Product> কম্পোনেন্ট রেন্ডার করা হচ্ছে
                products.map(product => (
                    <Product
                        key={product.cartId} // প্রতিটি প্রোডাক্টের ইউনিক key হিসেবে cartId ব্যবহার করা হয়েছে
                        product={product}    // প্রোডাক্ট অবজেক্টটি প্রপস হিসেবে পাঠানো হচ্ছে
                        addToCartData ={addToCartData}
                    />
                ))
            }
        </div>
    )
}

export default Products
