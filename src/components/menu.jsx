import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"} prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/old-henry"} prefetch={false}>
            Henry
          </Link>
        </li>
      </ul>
    </nav>
  );
}
