import { fetchPost } from "@/lib/api";
import { notFound } from "next/navigation";

export default async function Post(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    const post = await fetchPost(slug);
    if (typeof post.title === "undefined") {
        notFound()
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div>
                    <h2>{post.title.rendered}</h2>
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                </div>
            </main>
        </div>
    );
}
