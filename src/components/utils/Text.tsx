type ITextProps = {
  message: string,
};

function Text({ message }: ITextProps) {
  return (
    <p>{ message }</p>
  );
}

export default Text;
