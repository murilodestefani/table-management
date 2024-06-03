import { foods } from "@components/Foods/foodsData";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { ForkKnife } from "@phosphor-icons/react";

export function Foods() {
  return (
    <section>
      <header className="mb-2 flex items-center justify-center gap-1">
        <ForkKnife className="text-3xl" weight="bold" />
        <h1 className="text-center text-4xl font-extrabold">Cardápio</h1>
      </header>

      <div className="overflow-y-auto h-full z-10">
        {foods.map((food, index) => (
          <article className="block bg-transparent p-2">
            <Card className="w-full" shadow="sm" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  isZoomed
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={food.name}
                  className="h-[250px] w-full object-cover"
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
