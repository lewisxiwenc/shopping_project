const catalog = [
  {
    name: "Kingston DDR5 FURY Beast",
    category: "Ram",
    price: 589.99,
    image:
      "https://i5.walmartimages.com/seo/Kingston-FURY-Beast-64GB-2-x-32GB-288-Pin-PC-RAM-DDR5-5600-PC5-44800-Desktop-Memory_40bbc3a8-a1fb-4841-80dc-0b703cdb9b2a.718bd2b74b0fe84c3f1954180cd0bd3c.jpeg",
  },
  {
    name: "G.Skill Flare X5 memory module 2 x DDR5",
    category: "Ram",
    price: 153.99,
    image: "https://m.media-amazon.com/images/I/61gD0yqG+AL.jpg",
  },
  {
    name: "Corsair DDR4 Vengeance LPX Memory",
    category: "Ram",
    price: 170,
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRORX7-eXA-RVi_UC_1PQB5Ur-qY_dEA5L3MmMRR5nLCyW6ZUH4-Q7VmGbLcwq_s8oJUFVwrUDrm0rLSh47nyBEDAYSlz0IMaeWinr5sf9FXXs_2B34NlGyMA",
  },
  {
    name: "RTX 3060",
    category: "GPU",
    price: 329.99,
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQrcu9j--UsDpwAgzgkDiJLXlbrQZgs6uweJoelBYQrloFQqJ_NhXzHr7GT6eefDYW3taxJGBKyN9cYKJMEZk6n_Au5dc5VJ2jzhYjZDLfPd6Fjk9I7wQV-",
  },
  {
    name: "RTX 3070",
    category: "GPU",
    price: 499.99,
    image: "https://m.media-amazon.com/images/I/81761uwFaIL.jpg",
  },
  {
    name: "RTX 3090",
    category: "GPU",
    price: 2399,
    image: "https://m.media-amazon.com/images/I/81ZxzeX8YBL.jpg",
  },
  {
    name: "RX 9070 XT",
    category: "GPU",
    price: 929.99,
    image: "https://m.media-amazon.com/images/I/81huTBuLV+L.jpg",
  },
  {
    name: "RTX 4060",
    category: "GPU",
    price: 409.99,
    image: "https://m.media-amazon.com/images/I/61q0rsE3ezL.jpg",
  },
  {
    name: "RTX 4070",
    category: "GPU",
    price: 655,
    image: "https://m.media-amazon.com/images/I/71liIYrRmkL.jpg",
  },
  {
    name: "RTX 4090",
    category: "GPU",
    price: 3499.99,
  },
  {
    name: "RTX 5050",
    category: "GPU",
    price: 399,
  },
  {
    name: "RTX 5070",
    category: "GPU",
    price: 799,
  },
  {
    name: "Intel Arc B580",
    category: "GPU",
    price: 249,
  },
  {
    name: "AMD Ryzen 7 7700x",
    category: "CPU",
    price: 219,
  },
  {
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    price: 347.98,
  },
  {
    name: "Intel Core i7-14700F",
    category: "CPU",
    price: 329.97,
  },
  {
    name: "Intel Core i5-12400F",
    category: "CPU",
    price: 169.99,
  },
  {
    name: "AMD Ryzen 9 7950X3D",
    category: "CPU",
    price: 555.56,
  },
  {
    name: "ASUS ROG STRIX Z890-E",
    category: "Motherboard",
    price: 299.99,
  },
  {
    name: "ASRock B550M-C",
    category: "Motherboard",
    price: 89.99,
  },
  {
    name: "Gigabyte AORUS Z790 ELITE AX",
    category: "Motherboard",
    price: 189.99,
  },
  {
    name: "ASUS PRIME X870-P WIFI AM5 ATX Motherboard",
    category: "Motherboard",
    price: 189.99,
  },
  {
    name: "ASUS Prime H610M-A D4-CSM Desktop Motherboard",
    category: "Motherboard",
    price: 126.99,
  },
];

let cartTable = [];
let total = 0;

function filter(table, category) {
  let filterTable = [];
  for (item of table) {
    if (item.category == category) {
      filterTable.push(item.name);
    }
  }
  if (filterTable.length === 0) {
    return "Category not found!";
  }
  return filterTable;
}

function AddToCart(cart, item) {
  const targetItem = catalog.find((i) => i.name === item);
  if (targetItem) {
    const cartItem = cart.find((i) => i.name === item);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...targetItem, quantity: 1 });
    }
    total += targetItem.price;
  } else {
    return "Item not found.";
  }
  return cart;
}

function RemoveFromCart(cart, item) {
  const index = cart.findIndex((cartItem) => cartItem.name === item);
  if (index === -1) {
    return "Item not found.";
  }
  const cartItem = cart[index];
  cartItem.quantity--;
  total -= cartItem.price;

  if (cartItem.quantity === 0) {
    cart.splice(index, 1);
  }

  return cart;
}

function showTotal() {
  const num = Math.round(total * 100) / 100;
  console.log(num);
}

function printCart(cart) {
  let nameCart = [];
  for (item of cart) {
    nameCart.push(item.name + " x" + item.quantity);
  }
  console.log(nameCart);
}

const codes = ["ilovepcs", "4060isbad", "cat"];

let discountApplied = false;
function discountCodes(code) {
  const foundCode = codes.find((i) => i === code);
  if (foundCode) {
    if (discountApplied == false) {
      discountApplied = true;
      total *= 0.75;
      console.log("Code applied!");
    } else {
      console.log("Code already applied!");
    }
  } else {
    console.log("Invalid Code");
  }
  return total;
}

console.log(filter(catalog, "Ram"));
console.log(filter(catalog, "CPU"));
console.log(filter(catalog, "GPU"));

AddToCart(cartTable, "ASUS ROG STRIX Z890-E");
AddToCart(cartTable, "RTX 5070");
AddToCart(cartTable, "RTX 5070");
discountCodes("ilovepcs");
showTotal();
printCart(cartTable);