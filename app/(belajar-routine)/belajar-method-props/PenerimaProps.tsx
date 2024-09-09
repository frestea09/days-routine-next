export const PenerimaProps = ({
  data,
  handleAge,
}: {
  data: { name: string; age: number };
  handleAge: any;
}) => {
  return (
    <>
      <h3>Hello my name is : {data.age}</h3>
      <input
        name="inputAge"
        onChange={(event) => handleAge(event.target.value)}
      />
    </>
  );
};
