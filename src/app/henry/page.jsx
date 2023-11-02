export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, age, favouriteColor, image } = data;
  console.log(data);

  return (
    <main>
      <h1>{name}</h1>
      <h2>Age {age}</h2>
      <h3>Favourite colour is {favouriteColor}</h3>
    </main>
  );
}
