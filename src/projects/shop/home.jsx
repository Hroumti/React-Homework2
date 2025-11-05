import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Context from "./context";

export default function Home() {
    const { state, handleAddToCart } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentSlide, setCurrentSlide] = useState(0);

    const products = [
        { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 99, quantity: 25, image: '🎧' },
        { id: 2, name: 'Smart Watch', category: 'Electronics', price: 199, quantity: 15, image: '⌚' },
        { id: 3, name: 'Coffee Maker', category: 'Home', price: 79, quantity: 30, image: '☕' },
        { id: 4, name: 'Running Shoes', category: 'Sports', price: 129, quantity: 20, image: '👟' },
        { id: 5, name: 'Backpack', category: 'Fashion', price: 49, quantity: 40, image: '🎒' },
        { id: 6, name: 'Smartphone', category: 'Electronics', price: 699, quantity: 10, image: '📱' },
        { id: 7, name: 'Yoga Mat', category: 'Sports', price: 29, quantity: 35, image: '🧘' },
        { id: 8, name: 'Sunglasses', category: 'Fashion', price: 89, quantity: 50, image: '🕶️' },
        { id: 9, name: 'Blender', category: 'Home', price: 59, quantity: 18, image: '🥤' },
        { id: 10, name: 'Gaming Mouse', category: 'Electronics', price: 45, quantity: 22, image: '🖱️' },
        { id: 11, name: 'Water Bottle', category: 'Sports', price: 19, quantity: 60, image: '🍶' },
        { id: 12, name: 'Desk Lamp', category: 'Home', price: 39, quantity: 28, image: '💡' }
    ];

    const carouselSlides = [
        { title: "Welcome to Our Shop", subtitle: "Discover amazing products at great prices", bg: "#2f3061ff" },
        { title: "Free Shipping", subtitle: "On orders over $50", bg: "#6ca6c1ff" },
        { title: "New Arrivals", subtitle: "Check out our latest collection", bg: "#343434ff" }
    ];

    const categories = ["All", ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };

    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-brand">
                    <Link to="/">🛍️ Shop</Link>
                </div>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/cart">
                        Cart ({state.totalItems})
                    </Link>
                </div>
            </nav>

            {/* Carousel */}
            <div className="carousel">
                <div 
                    className="carousel-slide" 
                    style={{ background: carouselSlides[currentSlide].bg }}
                >
                    <div className="carousel-content">
                        <h2>{carouselSlides[currentSlide].title}</h2>
                        <p>{carouselSlides[currentSlide].subtitle}</p>
                    </div>
                    <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
                    <button className="carousel-btn next" onClick={nextSlide}>❯</button>
                </div>
                <div className="carousel-dots">
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Search and Filter */}
            <div className="search-filter">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <span className="search-icon">🔍</span>
                </div>
                
                <div className="filter-box">
                    <label>Category:</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="filter-select"
                    >
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image">{product.image}</div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="category">{product.category}</p>
                            <div className="price">${product.price}</div>
                            <div className="stock">In Stock: {product.quantity}</div>
                            <button 
                                className="add-btn"
                                onClick={() => handleAddToCart(product)}
                                disabled={product.quantity === 0}
                            >
                                {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="no-products">
                    <p>No products found matching your search.</p>
                </div>
            )}
        </div>
    );
}