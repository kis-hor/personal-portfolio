"use client";

import { motion } from "framer-motion";

type AnimatedRevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedReveal({ children, delay = 0, className }: AnimatedRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
