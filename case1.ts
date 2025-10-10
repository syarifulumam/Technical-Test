type IFruit = {
  fruitId: number;
  fruitName: string;
  fruitType: "IMPORT" | "LOCAL";
  stock: number;
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

function getFruitNames(fruits: IFruit[]): string[] {
  const names = new Set(fruits.map((f) => f.fruitName.toLowerCase()));
  return Array.from(names).map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1)
  );
}

function separateByType(fruits: IFruit[]) {
  const grouped: Record<string, IFruit[]> = {};

  for (const fruit of fruits) {
    const current = grouped[fruit.fruitType] ?? [];
    current.push(fruit);
    grouped[fruit.fruitType] = current;
  }

  return grouped;
}

function getTotalStockPerType(fruitsByType: Record<string, IFruit[]>) {
  const result: Record<string, number> = {};

  for (const [type, fruits] of Object.entries(fruitsByType)) {
    result[type] = fruits.reduce((acc, curr) => acc + curr.stock, 0);
  }

  return result;
}

const fruitNames = getFruitNames(fruits);
const fruitsByType = separateByType(fruits);
const totalStockPerType = getTotalStockPerType(fruitsByType);

console.log("Buah yang dimiliki Andi:", fruitNames);
console.log("Jumlah wadah:", Object.keys(fruitsByType).length);
for (const [type, list] of Object.entries(fruitsByType)) {
  console.log(
    `Wadah ${type}:`,
    list.map((f) => f.fruitName)
  );
}
console.log("Total stok per wadah:", totalStockPerType);
