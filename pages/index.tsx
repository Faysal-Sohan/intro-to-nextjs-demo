import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="text-2xl">
      <h1 className="text-5xl mb-12">Home Page</h1>
      {/* <Link href={"/posts"}>Posts</Link> */}
      <button
        className="bg-slate-200 p-2 rounded-md"
        onClick={() => router.push("/posts")}
      >
        Posts
      </button>
    </div>
  );
}
