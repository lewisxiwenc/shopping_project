const catalog = [
  {
    name: "Kingston DDR5 FURY Beast",
    category: "Ram",
    price: 589.99,
    image: "project_images/kingston_fury_ram.jpg",
  },
  {
    name: "G.Skill Flare X5 memory module 2 x DDR5",
    category: "Ram",
    price: 599.99,
    image: "project_images/g.skill_ddr5_ram.jpg",
  },
  {
    name: "Corsair DDR4 Vengeance LPX Memory",
    category: "Ram",
    price: 170,
    image: "project_images/corsair_vengeance_ram.jpg",
  },
  {
    name: "RTX 3060",
    category: "GPU",
    price: 329.99,
    image: "project_images/rtx3060.jpg",
  },
  {
    name: "RTX 3070",
    category: "GPU",
    price: 499.99,
    image: "project_images/rtx3070.jpg",
  },
  {
    name: "RTX 3090",
    category: "GPU",
    price: 2399,
    image: "project_images/rtx3090.jpg",
  },
  {
    name: "RTX 4060",
    category: "GPU",
    price: 409.99,
    image: "project_images/rtx4060.jpg",
  },
  {
    name: "RTX 4070",
    category: "GPU",
    price: 655,
    image: "project_images/rtx4070.jpg",
  },
  {
    name: "RTX 4090",
    category: "GPU",
    price: 3499.99,
    image: "project_images/rtx4090.jpg",
  },
  {
    name: "RTX 5050",
    category: "GPU",
    price: 399,
    image: "project_images/rtx5050.jpg",
  },
  {
    name: "RTX 5070",
    category: "GPU",
    price: 799,
    image: "project_images/rtx5070.jpg",
  },
  {
    name: "RX 9070 XT",
    category: "GPU",
    price: 929.99,
    image: "project_images/rx9070xt.jpg",
  },
  {
    name: "Intel Arc B580",
    category: "GPU",
    price: 249,
    image: "project_images/b580.webp",
  },
  {
    name: "AMD Ryzen 7 7700x",
    category: "CPU",
    price: 219,
    image: "project_images/ryzen-7-7700x.jpg",
  },
  {
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    price: 347.98,
    image: "project_images/ryzen-7-7800x3d.jpg",
  },
  {
    name: "AMD Ryzen 9 7950X3D",
    category: "CPU",
    price: 555.56,
    image: "project_images/ryzen-9-7950x3d.webp",
  },
  {
    name: "Intel Core i7-14700F",
    category: "CPU",
    price: 329.97,
    image: "project_images/intel-i7.jpg",
  },
  {
    name: "Intel Core i5-12400F",
    category: "CPU",
    price: 169.99,
    image: "project_images/intel-i5.webp",
  },
  {
    name: "ASUS ROG STRIX Z890-E",
    category: "Motherboard",
    price: 299.99,
    image: "project_images/asus-rog-strix-z890-e.jpg",
  },
  {
    name: "ASRock B550M-C",
    category: "Motherboard",
    price: 89.99,
    image: "project_images/b550m-c.webp",
  },
  {
    name: "Gigabyte AORUS Z790 ELITE AX",
    category: "Motherboard",
    price: 189.99,
    image: "project_images/z790.jpg",
  },
  {
    name: "ASUS PRIME X870-P WIFI AM5 ATX Motherboard",
    category: "Motherboard",
    price: 189.99,
    image: "project_images/x870-p.webp",
  },
  {
    name: "ASUS Prime H610M-A D4-CSM Desktop Motherboard",
    category: "Motherboard",
    price: 126.99,
    image: "project_images/h610m-a.jpg",
  },
];

const container = document.querySelector(".container");
const cart_container = document.querySelector(".cartbox");
const codes = ["ilovepcs", "4060isbad", "thisisapcpartshop"];

let cartTable = [];
let total = 0;

let filterTable = [];

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

function btn_functions() {
  let btns = document.querySelectorAll(".add_to_cart");
  const totalcount = document.querySelector("#money");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      AddToCart(cartTable, btn.dataset.item);

      cart_container.innerHTML = "";
      cartTable.forEach((item) => {
        cart_container.insertAdjacentHTML(
          "beforeend",
          `
        <div class="text item_info">
          <p>${item.name} $${item.price} x${item.quantity}</p>
        </div>`,
        );
        let total_money = Math.round(total * 100) / 100;
        totalcount.textContent = `Total: $${total_money}`;
      });
    });
  });
}

function inject(catalog) {
  container.innerHTML = "";

  catalog.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
    <div class="box">
      <h2 class="text header">${item.name}</h2>
      <p class="text category">${item.category}</p>
      <p class="text price">$${item.price}</p>
      <img id="image" src=${item.image} />
      <button class="button add_to_cart" data-item="${item.name}">Add to Cart</button>
    </div>
    `,
    );
  });
  btn_functions();
}

function filter(table, category) {
  filterTable = [];
  for (item of table) {
    if (item.category == category) {
      filterTable.push(item);
    }
  }
  if (filterTable.length === 0) {
    console.log("Category not found!");
  }
}

const f_btns = document.querySelectorAll(".filter");
f_btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.dataset.category == "Reset") {
      filterTable = [];
      inject(catalog);
    } else {
      filter(catalog, btn.dataset.category);
      inject(filterTable);
    }
  });
});

inject(catalog);
