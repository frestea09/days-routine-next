export default function BelajarDynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <>
      <p>{params.slug}</p>
    </>
  );
}
