// Cau 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Cau 2: Mang products (6+ san pham, 2+ danh muc)
const products = [
    new Product(1, "iPhone 15 Pro Max", 35000000, 10, "Electronics", true),
    new Product(2, "Samsung Galaxy S24", 28000000, 5, "Electronics", true),
    new Product(3, "MacBook Pro M3", 55000000, 3, "Electronics", true),
    new Product(4, "Tai nghe AirPods Pro", 6500000, 20, "Accessories", true),
    new Product(5, "Op lung iPhone", 250000, 0, "Accessories", false),
    new Product(6, "Sac nhanh 65W", 800000, 15, "Accessories", true),
    new Product(7, "Ban phim co Logitech", 2500000, 8, "Accessories", true),
    new Product(8, "Laptop Dell XPS 15", 42000000, 0, "Electronics", false)
];

// Cau 3: Mang moi chi chua name, price
const productNamePrice = products.map(function(product) {
    return {
        name: product.name,
        price: product.price
    };
});
console.log("Cau 3:", productNamePrice);

// Cau 4: Loc san pham con hang (quantity > 0)
const productsInStock = products.filter(function(product) {
    return product.quantity > 0;
});
console.log("Cau 4:", productsInStock);

// Cau 5: Kiem tra co it nhat 1 san pham gia > 30.000.000
const hasExpensiveProduct = products.some(function(product) {
    return product.price > 30000000;
});
console.log("Cau 5:", hasExpensiveProduct);

// Cau 6: Kiem tra tat ca Accessories deu dang ban
const accessoriesProducts = products.filter(function(product) {
    return product.category === "Accessories";
});
const allAccessoriesAvailable = accessoriesProducts.every(function(product) {
    return product.isAvailable === true;
});
console.log("Cau 6:", allAccessoriesAvailable);

// Cau 7: Tong gia tri kho hang = price * quantity
const totalInventoryValue = products.reduce(function(total, product) {
    return total + (product.price * product.quantity);
}, 0);
console.log("Cau 7:", totalInventoryValue);

// Cau 8: Dung for...of duyet mang
console.log("Cau 8:");
for (const product of products) {
    const trangThai = product.isAvailable ? "Dang ban" : "Ngung ban";
    console.log(product.name + " - " + product.category + " - " + trangThai);
}

// Cau 9: Dung for...in in ten thuoc tinh va gia tri
console.log("Cau 9:");
const firstProduct = products[0];
for (const property in firstProduct) {
    console.log("Thuoc tinh: " + property + " - Gia tri: " + firstProduct[property]);
}

// Cau 10: Lay danh sach ten san pham dang ban VA con hang
const availableAndInStock = products
    .filter(function(product) {
        return product.isAvailable === true && product.quantity > 0;
    })
    .map(function(product) {
        return product.name;
    });
console.log("Cau 10:", availableAndInStock);
