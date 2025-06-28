// app/Blog/[slug]/page.js
import Image from "next/image";
import { notFound } from "next/navigation";
import { BlogData } from "@/app/data/BlogData";

// Optional: generate static pages for each blog
export async function generateStaticParams() {
  return BlogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPage({ params }) {
  const blog = BlogData.find((b) => b.slug === params.slug);

  if (!blog) notFound();

  return (
    <main className="flex flex-col min-h-screen bg-primary rounded-2xl my-3 p-4 space-y-6">
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={blog.feature_image}
          alt={`${blog.title} main image`}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <h1 className="text-3xl font-bold text-white">{blog.title}</h1>
      <p className="text-white text-justify text-lg leading-relaxed">
        {blog.description_page}
      </p>

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




// // app/Blog/[slug]/page.js
// import Image from "next/image";
// import { notFound } from "next/navigation";

// // export const dynamic = "force-dynamic";

// export async function generateStaticParams() {
//   try {
//     const res = await fetch("http://infophd:8000/api/blogs", { cache: "no-store" });
//     const data = await res.json();
//     return data.data.map((blog) => ({
//       slug: blog.slug,
//     }));
//   } catch (error) {
//     console.error("Failed to fetch blog slugs:", error);
//     return []; // prevent build crash
//   }
// }


// export default async function BlogPage({ params }) {
//   const res = await fetch("http://infophd:8000/api/blogs", { cache: "no-store" });
//   const data = await res.json();
//   const blog = data.data.find((b) => b.slug === params.slug);

//   if (!blog) notFound();

//   return (
//     <main className="flex flex-col min-h-screen bg-primary rounded-2xl my-3 p-4 space-y-6">
//       <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
//         <Image
//           src={blog.feature_image}
//           alt={`${blog.title} main image`}
//           fill
//           className="object-cover rounded-lg"
//         />
//       </div>

//       <h1 className="text-3xl font-bold text-white">{blog.title}</h1>
//       <p className="text-white text-justify text-lg leading-relaxed">
//         {blog.description_page}
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4">
//         {blog.description_image_1 && (
//           <div className="relative flex-1 h-[250px] sm:h-[300px]">
//             <Image
//               src={blog.description_image_1}
//               alt={`${blog.title} image 1`}
//               fill
//               className="object-cover rounded-md"
//             />
//           </div>
//         )}
//         {blog.description_image_2 && (
//           <div className="relative flex-1 h-[250px] sm:h-[300px]">
//             <Image
//               src={blog.description_image_2}
//               alt={`${blog.title} image 2`}
//               fill
//               className="object-cover rounded-md"
//             />
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }
