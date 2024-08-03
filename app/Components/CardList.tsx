'use client'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useRouter } from 'next/navigation';

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
      {Array.from({ length: 6 }).map((_, index) => (
        <MockCard key={index} />
      ))}
    </div>
  )
}

const MockCard = () => {
  const imageName = 'Images/Card/mixednut.webp';
  const title = 'แอลม่อน';
  const detail = 'ถั่วแสนอร่อย กินแล้วมีพลัง';
  const router = useRouter();

  const handleClick = () => {
    router.push(`/item/1`);
  };

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
          src={imageName}
          alt={`image of ${title}`}
          className="h-100 w-full object-cover"
          w={400}
        />
      </Card.Section>
      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
        {detail}
      </Text>
    </Card>
    </>
  )
}
export default CardList;