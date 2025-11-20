import { fetchPosts } from "@/lib/api";
import Link from "next/link";
export default async function Home() {
  const posts = await fetchPosts();
  console.log("posts", posts);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        {posts.map((post, index) => 
          (<div key={`post-${index}`}>
            <Link href={`posts/${post.slug}`}>{post.title.rendered}</Link>
          </div>)
        )}
      </main>
    </div>
  );
}
