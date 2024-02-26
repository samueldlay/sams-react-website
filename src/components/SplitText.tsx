import { motion } from "framer-motion";

export default function SplitText({ className, text }: { className: string; text: string }) {
  const variants = {
    hidden: {
      opacity: 0,
      x: 0
    },
    visible: (index: number) => {
      return {
        opacity: 1,
        x: 50,
        transition: {
          delay: index * 0.035,
        },
      }
    },
    inView: (index: number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.035,
        },
      }
    }
  }

  return (
    <div className="flex flex-wrap relative">
      <div className="flex flex-wrap gap-1">
        {text.slice(0, 150).split(" ").map((word, index) => (
          <motion.span key={word + index} initial="hidden" whileInView={"inView"} variants={variants} custom={index} className={className}>{word}</motion.span>
        ))}
      </div>
    </div>
  );
}
