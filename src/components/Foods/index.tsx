import { foods } from "@components/Foods/foodsData";
import { Card, CardBody, CardFooter, Chip, Image } from "@nextui-org/react";
import { ForkKnife } from "@phosphor-icons/react";

export function Foods() {
  return (
    <section className="flex flex-col gap-6">
      <header className="flex items-center justify-center gap-1">
        <Chip
          color={"primary"}
          size="lg"
          variant="flat"
          startContent={<ForkKnife weight="fill" />}
        >
          <h1>Cardápio</h1>
        </Chip>
      </header>

      <div className="z-10 h-full overflow-x-auto whitespace-nowrap">
        {foods.map((food, index) => (
          <article className="inline-block bg-transparent p-2">
            <Card className="w-full" shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={food.name}
                  className="h-[200px] w-full object-cover"
                  src={food.img}
                />
              </CardBody>
              <CardFooter className="justify-between text-small">
                <b className="line-clamp-1">{food.name}</b>
                <p className="text-default-500">R$ {food.price}</p>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
