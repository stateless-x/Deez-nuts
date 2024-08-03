'use client'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { products } from '../mock';

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

const CardList = () => {

  return (
    <div className="
      grid 
      grid-cols-1
      gap-10
      place-items-center
      sm:grid-cols-2
      lg:grid-cols-3
      sm:mx-24
      lg:mx-48
">
      {products.map((product) => (
        <MockCard key={product.id} product={product} />
      ))}
    </div>
  )
}

const MockCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(`/item/${product.id}`);
  };

  const getStatusColor = (status: keyof typeof STATUS | null) => {
    switch (status) {
      case 'sales':
        return 'pink';
      case 'hot':
        return 'green';
      case 'outOfStock':
        return 'gray';
      default:
        return null;
    }
  };
  const statusColor = getStatusColor(product.status);
  return (
    <>
   <Card
      shadow="sm"
      padding="xl"
      component="a"
      onClick={handleClick}
      className="w-full max-w-xs"
    >
      <Card.Section>
        <Image
          src={product.image}
          alt={`image of ${product.name}`}
          className="h-100 w-full object-cover"
          w={400}
        />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <Text fw={500} size="lg" >{product.name}</Text>
        {statusColor && product.status && (
          <Badge color={statusColor} size="lg">{STATUS[product.status]}</Badge>
        )}
      </Group>
      <Text mt="xs" c="dimmed" size="sm">
        {product.description}
      </Text>
    </Card>
    </>
  )
}
export default CardList;