import Image from "next/image";
import { notFound } from "next/navigation";

//gør dette til en statisk page
export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { slug: page.slug };
  });

  return paths;
}

//genererer metadata til siden på page name og description
export async function generateMetadata(params) {
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Dog({ params }) {
  // slug gør det muligt at gøre funktionen dynamisk, derfor hentes den ind via
  // params og defineres som const og anvendes derefter i url
  const { slug } = params;
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  if (res.status != 200) return notFound();
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
      {favouriteColor && <h3>Favourite colour is {favouriteColor}</h3>}
      <p>Favourite colour is {favouriteColor ? favouriteColor : "none"}</p>
    </main>
  );
}
