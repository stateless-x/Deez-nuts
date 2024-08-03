import { notFound } from 'next/navigation';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  try {
    // const res = await fetch(`https://api.example.com/products/${id}`);
    // const product: Product | null = await res.json();
    const product: Product | null = {
      id: "1",
      name: "Almond Breeze",
      description: "Mock product description",
      price: 99.99,
    };
    if (!product) {
      return { title: 'Product Not Found' };
    }
    return {
      title: product.name,
      description: product.description,
    };
  } catch {
    return { title: 'Product Not Found' };
  }
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  try {
    // const res = await fetch(`https://api.example.com/products/${id}`);
    // const product: Product | null = await res.json();
    const product: Product | null = {
      id: "1",
      name: "Mock Product Name",
      description: "Mock product description",
      price: 99.99,
    };
    if (!product) {
      notFound();
    }
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        {/* Add other product details here */}
      </div>
    );
  } catch {
    notFound();
  }
};

export default ProductPage;
