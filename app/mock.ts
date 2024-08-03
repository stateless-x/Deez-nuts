enum STATUS {
  sales = 'สินค้าลดราคา',
  hot = 'สินค้าขายดี',
  outOfStock = 'สินค้าหมด',
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  status: keyof typeof STATUS | null;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'แอลม่อน',
    description: 'ถั่วแสนอร่อย กินแล้วมีพลัง',
    price: 250,
    image: 'Images/Card/almond.webp',
    status: 'hot',
  },
  {
    id: '2',
    name: 'ถั่วลิสง',
    description: 'ถั่วแสนอร่อย กินแล้วมีพลัง',
    price: 300,
    image: 'Images/Card/peanut.webp',
    status: 'sales',
  },
  {
    id: '3',
    name: 'ถั่วรวม (Set)',
    description: 'ถั่วแสนอร่อย กินแล้วมีพลัง',
    price: 299,
    image: 'Images/Card/mixednut.webp',
    status: 'outOfStock',
  },
  {
    id: '4',
    name: 'ถั่วรวม (เล็ก)',
    description: 'ถั่วแสนอร่อย กินแล้วมีพลัง',
    price: 50,
    image: 'Images/Card/mixednut.webp',
    status: null,
  },
  {
    id: '5',
    name: 'ถั่วรวม​ (กลาง)',
    description: 'ถั่วแสนอร่อย กินแล้วมีพลัง',
    price: 899,
    image: 'Images/Card/mixednut.webp',
    status: null,
  },
  {
    id: '6',
    name: 'ถั่วรวม (ใหญ่)',
    description: 'ถั่วแสนอร่อย กินแล้วมีพลัง',
    price: 999,
    image: 'Images/Card/mixednut.webp',
    status: null,
  },
];