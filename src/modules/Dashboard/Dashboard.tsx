import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <main>
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
      </main>
    </div>
  );
};

export { Dashboard };
