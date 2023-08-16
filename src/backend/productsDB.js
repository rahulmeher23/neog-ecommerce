import { v4 as uuid } from "uuid";
import v27 from "../assets/productImg/vivo-v27-pro.jpg";
import Ip14 from "../assets/productImg/iphone14-2.jpg";
import r11 from "../assets/productImg/redmi-11.webp";
import f13 from "../assets/productImg/f13-copper.avif";
import victus from "../assets/productImg/hp-victus.jpg";
import m2 from "../assets/productImg/macbook-pro-m2.webp";
import hp15 from "../assets/productImg/hp-15s.jpg";
import rog from "../assets/productImg/asus-rog.png";
import ammo from "../assets/productImg/boult-ammo.webp";
import maverick from "../assets/productImg/boult-maverick.webp";
import oneplus15y from "../assets/productImg/oneplus-15y.webp";

export const productsDB = [
  {
    _id: uuid(),
    name: "Vivo V27 Pro (Magic Blue)",
    price: "44,999",
    discount: "39,999",
    qty: 1,
    rating: 4.6,
    category: "Mobiles",
    img: v27,
    description: {
      des1: "8GB RAM | 256GB Internal Storage",
      des2: "17.22 cm (6.78 inch) Full HD+ Display",
      des3: "50MP (OIS) + 8MP + 2MP | 50MP Front Camera",
    },
  },
  {
    _id: uuid(),
    name: "REDMI 11 Prime (Peppy Purple)",
    price: "16,999",
    discount: "10,749",
    qty: 1,
    rating: 3.2,
    category: "Mobiles",
    img: r11,
    description: {
      des1: "8GB RAM | 128GB Internal Storage",
      des2: "15.49 cm (6.1 inch) Full HD Display",
      des3: "48MP + 12MP | 8MP Front Camera",
    },
  },

  {
    _id: uuid(),
    name: "Apple IPhone 14 (Midnight Black)",
    price: "79,990",
    discount: "68,999",
    qty: 1,
    rating: 4.8,
    category: "Mobiles",
    img: Ip14,
    description: {
      des1: "8GB RAM | 128GB Internal Storage",
      des2: "15.49 cm (6.1 inch) Super Retina XDR Display",
      des3: "12MP + 12MP | 12MP Front Camera",
    },
  },

  {
    _id: uuid(),
    name: "SAMSUNG F13 (Sunrise Copper)",
    price: "14,999",
    discount: "10,999",
    qty: 1,
    rating: 3.8,
    category: "Mobiles",
    img: f13,
    description: {
      des1: "4GB RAM | 64GB Internal Storage",
      des2: "16.76 cm (6.6 inch) Full HD+ Display",
      des3: "50MP + 5MP + 2MP | 8MP Front Camera",
    },
  },

  {
    _id: uuid(),
    name: "HP Victus Gaming",
    price: "66,999",
    discount: "52,990",
    qty: 1,
    rating: 4.3,
    category: "Laptop",
    img: victus,
    description: {
      des1: "8GB RAM | 512GB SSD | 15.6 Inch",
      des2: "Windows11 Home",
      des3: "4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz",
    },
  },

  {
    _id: uuid(),
    name: "APPLE 2022 MacBook Pro M2",
    price: "1,29,990",
    rating: 4.8,
    discount: "1,19,790",
    qty: 1,
    category: "Laptop",
    img: m2,
    description: {
      des1: "8GB RAM | 256GB SSD | 13.3 Inch",
      des2: "Mac OS Monterey | No Optical Drive",
      des3: "LED-backlit display with IPS technology",
    },
  },

  {
    _id: uuid(),
    name: "HP 15s-fy5003TU",
    price: "51,250",
    discount: "39,990",
    qty: 1,
    rating: 4.1,
    category: "Laptop",
    img: hp15,
    description: {
      des1: "Intel Core i3 12th Generation",
      des2: "8GB RAM | 512GB SSD | 15.6 Inch",
      des3: "Windows 11 Home",
    },
  },

  {
    _id: uuid(),
    name: "ASUS ROG Strix G15 (2022)",
    price: "1,94,990",
    discount: "1,22,990",
    qty: 1,
    rating: 4.4,
    category: "Laptop",
    img: rog,
    description: {
      des1: "AMD Ryzen 9 Octa Core Processor",
      des2: "16GB DDR5 RAM | i TB SSD | 15.6 Inch",
      des3: "Windows 11 Home | 6 GB Graphics NVIDIA GeForce RTX 3060/300 Hz",
    },
  },

  {
    _id: uuid(),
    name: "Boult Ammo Gaming",
    price: "1,899",
    discount: "1,299",
    qty: 1,
    rating: 4.4,
    category: "Truly Wireless",
    img: ammo,
    description: {
      des1: "45 ms Low Latency Gaming Mode",
      des2: "Battery Life: 40 Hours | Connectivity: Bluetooth, Version 5.3",
      des3: "Noise Cancellation: Environmental Noise Cancellation",
    },
  },

  {
    _id: uuid(),
    name: "Boult Maverick Gaming",
    price: "1,899",
    discount: "1,299",
    qty: 1,
    rating: 4.8,
    category: "Truly Wireless",
    img: maverick,
    description: {
      des1: "45 ms Low Latency Gaming Mode",
      des2: "Battery Life: 40 Hours | Connectivity: Bluetooth, Version 5.3",
      des3: "Noise Cancellation: Environmental Noise Cancellation | Quad Mic",
    },
  },

  {
    _id: uuid(),
    name: "OnePlus 50Y1S Prox",
    price: "45,999",
    discount: "32,999",
    qty: 1,
    rating: 5,
    category: "TV",
    img: oneplus15y,
    description: {
      des1: "Display: 126cm (50 inch), 4K Ultra HD,  3840 x 2160 pixels | Operating System: Android",
      des2: "Connectivity: 3 HDMI | 2 USB | Wi-Fi | Sound: 24 W Speaker, Dolby Audio",
      des3: "Apps: Netflix, Prime Video, Youtube, Hotstar",
    },
  },
];
