import dotenv from "dotenv";
dotenv.config();

import express from "express";
import jwt from "jsonwebtoken";

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

const users = [
  {
    userId: 1,
    name: "noman khan",
    email: "noman@dev.com",
    age: 25,
    location: "New York, NY",
    purchasedProducts: [1, 3, 6],
    isActive: true,
  },
  {
    userId: 2,
    name: "David Smith",
    email: "david.smith@example.com",
    age: 35,
    location: "Los Angeles, CA",
    purchasedProducts: [2, 4, 5, 10],
    isActive: true,
  },
  {
    userId: 3,
    name: "Emma Williams",
    email: "emma.williams@example.com",
    age: 22,
    location: "Austin, TX",
    purchasedProducts: [7, 8],
    isActive: false,
  },
  {
    userId: 4,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    age: 41,
    location: "Chicago, IL",
    purchasedProducts: [1, 9],
    isActive: true,
  },
  {
    userId: 5,
    name: "Sophia Davis",
    email: "sophia.davis@example.com",
    age: 30,
    location: "Seattle, WA",
    purchasedProducts: [2, 3, 15],
    isActive: true,
  },
  {
    userId: 6,
    name: "James Wilson",
    email: "james.wilson@example.com",
    age: 27,
    location: "Miami, FL",
    purchasedProducts: [5, 11, 16],
    isActive: false,
  },
  {
    userId: 7,
    name: "Olivia Taylor",
    email: "olivia.taylor@example.com",
    age: 26,
    location: "San Francisco, CA",
    purchasedProducts: [3, 4, 7],
    isActive: true,
  },
  {
    userId: 8,
    name: "Liam Harris",
    email: "liam.harris@example.com",
    age: 33,
    location: "Boston, MA",
    purchasedProducts: [8, 9, 10],
    isActive: true,
  },
  {
    userId: 9,
    name: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    age: 29,
    location: "Houston, TX",
    purchasedProducts: [1, 2, 3],
    isActive: true,
  },
  {
    userId: 10,
    name: "Mason Clark",
    email: "mason.clark@example.com",
    age: 31,
    location: "Phoenix, AZ",
    purchasedProducts: [5, 6, 12],
    isActive: false,
  },
];

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    brand: "SoundWave",
    category: "Electronics",
    price: 89.99,
    inStock: true,
    features: [
      "Noise cancellation",
      "20-hour battery life",
      "Built-in microphone",
    ],
  },
  {
    id: 2,
    name: "Yoga Mat",
    brand: "EcoFit",
    category: "Fitness",
    price: 29.99,
    inStock: true,
    features: ["Non-slip surface", "Eco-friendly material", "Portable"],
  },
  {
    id: 3,
    name: "Smart Watch",
    brand: "TechTime",
    category: "Wearables",
    price: 199.99,
    inStock: false,
    features: [
      "Heart rate monitor",
      "GPS tracking",
      "Customizable watch faces",
    ],
  },
  {
    id: 4,
    name: "Coffee Maker",
    brand: "BrewMaster",
    category: "Home Appliances",
    price: 49.99,
    inStock: true,
    features: ["Programmable settings", "Auto shut-off", "Compact design"],
  },
  {
    id: 5,
    name: "Gaming Laptop",
    brand: "PowerPlay",
    category: "Computers",
    price: 1299.99,
    inStock: true,
    features: ["High-performance GPU", "16GB RAM", "1TB SSD"],
  },
  {
    id: 6,
    name: "Smart TV",
    brand: "Samsung",
    category: "Electronics",
    price: 799.99,
    inStock: true,
    features: ["Smart TV", "4K Ultra HD", "HDR"],
  },
  [
    {
      id: 6,
      name: "Air Fryer",
      brand: "HealthyCook",
      category: "Kitchen Appliances",
      price: 79.99,
      inStock: true,
      features: ["Oil-free cooking", "7 preset cooking modes", "Easy to clean"],
    },
    {
      id: 7,
      name: "Bluetooth Speaker",
      brand: "SoundBlast",
      category: "Electronics",
      price: 49.99,
      inStock: true,
      features: [
        "Water-resistant",
        "10-hour battery life",
        "Voice assistant compatibility",
      ],
    },
    {
      id: 8,
      name: "Electric Toothbrush",
      brand: "BrightSmile",
      category: "Personal Care",
      price: 39.99,
      inStock: true,
      features: [
        "2-minute timer",
        "Multiple cleaning modes",
        "Rechargeable battery",
      ],
    },
    {
      id: 9,
      name: "Smart Thermostat",
      brand: "HomeTech",
      category: "Home Automation",
      price: 129.99,
      inStock: false,
      features: [
        "Wi-Fi enabled",
        "Energy-saving mode",
        "Remote access via app",
      ],
    },
    {
      id: 10,
      name: "Fitness Tracker",
      brand: "ActiveLife",
      category: "Wearables",
      price: 59.99,
      inStock: true,
      features: ["Step tracking", "Sleep monitoring", "Water-resistant"],
    },
  ][
    ({
      id: 11,
      name: "Portable Charger",
      brand: "PowerPack",
      category: "Accessories",
      price: 29.99,
      inStock: true,
      features: ["10,000mAh capacity", "Fast charging", "Compact design"],
    },
    {
      id: 12,
      name: "LED Desk Lamp",
      brand: "BrightLight",
      category: "Home Office",
      price: 39.99,
      inStock: true,
      features: ["Touch control", "Adjustable brightness", "USB charging port"],
    },
    {
      id: 13,
      name: "Skincare Set",
      brand: "GlowBeauty",
      category: "Personal Care",
      price: 49.99,
      inStock: true,
      features: [
        "Moisturizer, cleanser, and serum",
        "All-natural ingredients",
        "Cruelty-free",
      ],
    },
    {
      id: 14,
      name: "Digital Camera",
      brand: "PhotoPro",
      category: "Photography",
      price: 599.99,
      inStock: false,
      features: [
        "24MP resolution",
        "4K video recording",
        "Interchangeable lenses",
      ],
    },
    {
      id: 15,
      name: "Smart Speaker",
      brand: "VoiceConnect",
      category: "Home Automation",
      price: 99.99,
      inStock: true,
      features: [
        "Voice-activated",
        "Multi-room audio",
        "Smart home integration",
      ],
    },
    {
      id: 16,
      name: "Camping Tent",
      brand: "AdventureGear",
      category: "Outdoor",
      price: 149.99,
      inStock: true,
      features: ["Waterproof", "Easy setup", "Sleeps up to 4 people"],
    })
  ],
];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }
   jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

app.get("/", (req, res) => {
  res.send("Hey from Node server!");
});

app.get("/api/users", (req, res) => {
  try {
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/login", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const user =  users.find((user) => user.email === email && user.name === name);

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const accessToken = jwt.sign({ email }, process.env.SECRET_KEY, {
    expiresIn: "5m",
  });

  res.status(200).json({ accessToken });
});

app.get("/api/products", (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", authenticateToken, (req, res) => {
  try {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/create-product", authenticateToken, (req, res) => {
  try {
    const { name, brand, category, price, features } = req.body;
    const product = {
      id: products.length + 1,
      name,
      brand,
      category,
      price,
      features,
    };
   products.push(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/update-product/:id", authenticateToken, (req, res) => {
  try {
    const product =  products.find((p) => p.id === parseInt(req.params.id));

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const { name, brand, category, price, features, inStock } = req.body;

    product.name = name || product.name;
    product.brand = brand || product.brand;
    product.category = category || product.category;
    product.features = features || product.features;
    product.price = price || product.price;
    product.inStock = inStock ?? product.inStock;
    res.status(200).json({ msg: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/delete-product/:id", authenticateToken, (req, res) => {
  try {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/delete-all-products", authenticateToken, (req, res) => {
  try {
    products.splice(0, products.length);
    res.status(200).json({ message: "All products deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/search", (req, res) => {
  const page = parseInt(req.query.page) || 1;

  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const Products = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / limit);

  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;

  res.json({
    Products,
    page,
    limit,
    totalPages,
    prevPage,
    nextPage,
    totalProduct: products.length,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
