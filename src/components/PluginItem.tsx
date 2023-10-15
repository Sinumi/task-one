import Button from "./Button";

type Props = {
  image: string;
  name: string;
  price: number;
};

export default function PluginItem({ image, name, price }: Props) {
  return (
    <div className="px-2 py-4">
      <div className="mt-4 rounded-lg overflow-hidden object-fill">
        <img src={image} alt={name} />
      </div>
      <div className="pt-[9px] pb-2">
        <h1>{name}</h1>
        <span className="text-primary">${price}</span>
      </div>
      <Button name="Buy" />
    </div>
  );
}
