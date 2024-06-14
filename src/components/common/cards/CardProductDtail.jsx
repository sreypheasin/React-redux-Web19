import { Card } from "flowbite-react";

export function CardProductDetail({ image, title, description, price }) {
  return (
    <Card className="max-w-sm " imgSrc={image} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      <p className="text-2xl">{price}$</p>
    </Card>
  );
}
