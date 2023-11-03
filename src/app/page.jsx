export const dynamic = "force-dynamic"; // SSR
// export const dynamic = "force-static"; // SSG

export const metadata = {
  title: "Home",
  description: "A description",
};

export default async function Home() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const imageData = await res.json();
  console.log(imageData);

  return (
    <>
      <main>
        <h1>Hej</h1>
        <img src={imageData.message} alt="a dog" />
      </main>
    </>
  );
}
