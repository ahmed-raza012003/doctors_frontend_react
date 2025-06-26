// app/Blog/[slug]/page.js
import { BlogData } from "@/app/data/BlogData";
import Image from "next/image";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return BlogData.map((blog) => ({
    slug: blog.slug,
  }));
};

export default function BlogPage({ params }) {
  const { slug } = params;
  const blog = BlogData.find((b) => b.slug === slug);

  if (!blog) {
    notFound(); // show 404 if not found
  }

  return (
    <main className="flex flex-col min-h-screen bg-primary rounded-2xl my-3 p-4 space-y-6">
      {/* Main Full-Width Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={blog.feature_image}
          alt={`${blog.title} main image`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Blog Title */}
      <h1 className="text-3xl font-bold text-white">{blog.title}</h1>

      {/* Blog Description */}
      <p className="text-white text-justify text-lg leading-relaxed">{blog.description_page}</p>

      {/* Additional 2 Images in Flex Layout */}
      <div className="flex flex-col sm:flex-row gap-4">
  {blog.description_image_1 && (
    <div className="relative flex-1 h-[250px] sm:h-[300px]">
      <Image
        src={blog.description_image_1}
        alt={`${blog.title} image 1`}
        fill
        className="object-cover rounded-md"
      />
    </div>
  )}

  {blog.description_image_2 && (
    <div className="relative flex-1 h-[250px] sm:h-[300px]">
      <Image
        src={blog.description_image_2}
        alt={`${blog.title} image 2`}
        fill
        className="object-cover rounded-md"
      />
    </div>
  )}
</div>
    </main>
  );
}
