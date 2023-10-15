type Props = {
  name: string;
};

export default function Button({ name }: Props) {
  return (
    <button className="text-white bg-primary rounded-md h-12 px-12">
      {name}
    </button>
  );
}
