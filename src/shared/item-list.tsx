import type { Item as ItemType } from "../types.ts";
import { dayjs } from "../dayjs.ts";
import { H1 } from "../shared/elements.tsx";
import { Item } from "../shared/item.tsx";

type Props = {
  title: string;
  items: ItemType[];
};

export function ItemList({ title, items }: Props) {
  return (
    <>
      <H1>{title}</H1>
      {items.map((i) => (
        <Item
          id={i.id}
          name={i.name}
          description={i.description}
          releaseDate={dayjs(i.releaseDate).fromNow()}
          posterPath={i.posterPath}
          link={i.link}
        />
      ))}
    </>
  );
}
