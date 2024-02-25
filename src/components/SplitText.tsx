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
      {text.split(" ").slice(0, 40).map((word, index) => (
        <motion.p key={word + index} initial="hidden" whileInView={"inView"} variants={variants} custom={index} className={className}>{word}&nbsp;</motion.p>
      ))}
    </div>
  );
}
