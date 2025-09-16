type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='meuInput'>Task:</label>
      <input id={id} type={type} />
    </>
  );
}
