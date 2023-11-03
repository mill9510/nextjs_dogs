import Image from "next/image";

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, age, favouriteColor, image } = data;
  console.log(data);

  return (
    <main>
      <Image
        src={image.url}
        alt={name}
        width={image.width}
        height={image.height}
        priority={true} // disables lazy load
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         400px"
      />
      <h1>{name}</h1>
      <h2>Age {age}</h2>
      <h3>Favourite colour is {favouriteColor}</h3>
      <p>hey</p>
    </main>
  );
}
