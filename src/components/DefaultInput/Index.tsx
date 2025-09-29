type DefaultInputProps = {
  id: string;
} & React.ComponentProps<'input'>

export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
    <label htmlFor='input'>Task</label>
    <input id='input' type={type} />
    </>
  )
}