import Link from "next/link";

export default async function Menu() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"} prefetch={false}>
            Home
          </Link>
        </li>

        {pages.map((page) => {
          return (
            <li key={page.id}>
              <Link href={`/dogs/${page.slug}`}>{page.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
