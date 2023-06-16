import Link from "next/link";

export const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link href="/bands">Bands List</Link>
          </li>
          <li>
            <Link href="/events">Events List</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
