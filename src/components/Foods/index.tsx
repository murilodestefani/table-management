import { foods } from "@components/Foods/foodsData";
import {
  Card,
  CardBody,
  CardFooter,
  ScrollShadow,
} from "@nextui-org/react";

export function Foods() {
  return (
    <main className="flex max-h-full w-full gap-4 p-4">
      <ScrollShadow
        hideScrollBar
        className="flex max-h-[600px] flex-wrap justify-center gap-4 overflow-auto"
      >
        {foods.map((food, index) => (
          <Card className="aspect-square w-60" shadow="sm" key={index}>
            <CardBody className="h-full w-full overflow-visible p-0">
              <img
                alt={food.name}
                src={food.img}
                className="h-full w-full object-cover"
              />
            </CardBody>
            <CardFooter className="flex items-center justify-between text-sm">
              <b className="line-clamp-1 w-[80%]">{food.name}</b>
              <p className="text-tiny text-default-500 flex-growtext-end">R$ {food.price}</p>
            </CardFooter>
          </Card>
        ))}
      </ScrollShadow>
    </main>
  );
}
