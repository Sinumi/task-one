import PluginItem from "./PluginItem";

type Props = {
  title: string;
};

const plugins = [
  {
    id: 1,
    name: "RubIcon",
    price: 100,
    image: "https://picsum.photos/260/260?random=1",
  },
  {
    id: 2,
    name: "Сamera",
    price: 200,
    image: "https://picsum.photos/260/260?random=2",
  },
  {
    id: 3,
    name: "G Generator",
    price: 1000,
    image: "https://picsum.photos/260/260?random=3",
  },
  {
    id: 4,
    name: "Invoice Creator",
    price: 100,
    image: "https://picsum.photos/260/260?random=4",
  },
];

export default function PluginsList({ title }: Props) {
  return (
    <>
      <h1 className="text-3xl pb-3">{title}</h1>
      <ul className="flex items-center gap-6 flex-wrap">
        {plugins.map((plugin) => (
          <PluginItem key={plugin.id} {...plugin} />
        ))}
      </ul>
    </>
  );
}
