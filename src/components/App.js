import { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import Search from "./Search";

const list = [
  {
    name: "Acer aspire 5",
    img: "/images/acer_aspire_5.webp",
    description:
      "Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6' Full HD IPS | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi 6 | Backlit KB | Amazon Alexa | Windows 10 Home (S mode)",
  },
  {
    name: "Acer swift X",
    img: "/images/acer_swift_X.webp",
    description:
      "Acer Swift X SFX14-41G-R1S6 Creator Laptop | 14' Full HD 100% sRGB | AMD Ryzen 7 5800U | NVIDIA RTX 3050Ti Laptop GPU | 16GB LPDDR4X | 512GB SSD | Wi-Fi 6 | Backlit KB | Amazon Alexa | Windows 10 Home",
  },
  {
    name: "Airpod Pro",
    img: "/images/airpod_pro.jpg",
    description: "Apple AirPods Pro",
  },
  {
    name: "Apple Pencil",
    img: "/images/apple_pencil.jpg",
    description: "Apple Pencil (2nd Generation)",
  },
  {
    name: "Macbook Air",
    img: "/images/macbook_air.jpg",
    description:
      "2020 Apple MacBook Air Laptop: Apple M1 Chip, 13' Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Gold",
  },
  {
    name: "XBOX series 5",
    img: "/images/xbox_series_5.jpg",
    description:
      "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version with US Power Cable",
  },
];

function App() {
  const [items, setItems] = useState(list);

  const handleSearch = (name) => {
    const afterSearchResult = list.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    setItems(afterSearchResult);
  };
  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <Cards list={items} />
    </div>
  );
}

export default App;
