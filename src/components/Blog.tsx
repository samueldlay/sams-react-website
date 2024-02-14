import { motion } from "framer-motion";
import { useState } from "react";

type Posts = {
  id: number;
  title: string;
  content: string;
}[]
export const posts = [
  { id: 1, title: 'First Post', content: 'This is my first post!' },
  { id: 2, title: 'Second Post', content: 'This is my second post!' },
  { id: 3, title: 'Third Post', content: 'This is my third post!' },
  { id: 4, title: 'Fourth Post', content: 'This is my fourth post!' },
  { id: 5, title: 'Fifth Post', content: 'This is my fifth post!' },
  { id: 6, title: 'Sixth Post', content: 'This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!This is my sixth post!' },
  { id: 7, title: 'Seventh Post', content: 'This is my seventh post!' },
]

export default function Blog({ posts }: { posts: Posts }) {
  const [activePost, setActivePost] = useState(0);

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const demoVariants = {
    hidden: {
      // x: "12rem",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-8">
        {posts.map((post, index) => <h1 onClick={() => setActivePost(index)} className="basis-1/4 w-48 font-medium text-lg">{post.title}</h1>)}
      </div>
      <motion.div
        key={posts[activePost]?.id}
        initial="hidden"
        animate="animate"
        className="basis-3/4 w-full"
        variants={demoVariants}
      >
        <motion.h1 className="text-2xl font-semibold" variants={demoVariants}>{posts[activePost]?.title}</motion.h1>
        <motion.p variants={demoVariants}>{posts[activePost]?.content}</motion.p>
      </motion.div>
    </div>
  )
}
