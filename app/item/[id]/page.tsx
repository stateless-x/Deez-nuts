import { notFound } from 'next/navigation';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { products } from '@/app/mock';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  try {
    // const res = await fetch(`https://api.example.com/products/${id}`);
    // const product: Product | null = await res.json();
    const product = products.find((product) => product.id === id);

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
    const product = products.find((product) => product.id === id);

    if (!product) {
      notFound();
    }
    return (
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price} บาท</p>
        {/* Add other product details here */}
      </div>
    );
  } catch {
    notFound();
  }
};

export default ProductPage;
