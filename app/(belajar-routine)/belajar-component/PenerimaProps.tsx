export const PenerimaProps = ({
  data,
}: {
  data: { bilanganPertama: number; bilanganKedua: number };
}) => {
  return (
    <>
      <p>Bilangan Pertama : {data.bilanganPertama}</p>
      <p>Bilangan Kedua : {data.bilanganKedua}</p>
    </>
  );
};
