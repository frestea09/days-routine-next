import { PenerimaProps } from "./PenerimaProps";

export const BelajarProps = () => {
  const data = {
    bilanganPertama: 2,
    bilanganKedua: 2,
  };
  return (
    <>
      <h3>Belajar Props</h3>
      <PenerimaProps data={data} />
    </>
  );
};
