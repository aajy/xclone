import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>logo</div>
      <div>
        right
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
