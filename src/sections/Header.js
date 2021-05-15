import React from "react";
import Logo from "../resources/Logo";
import { motion } from "framer-motion";

export default function Header(...props) {
  return (
    <div class="h-screen w-screen">
      <motion.img
        initial={{ opacity: 0.0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.0, duration: 0.3 }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          objectFit: "cover",
          opacity: "30%",
        }}
        src="https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/_O8A6544.jpg?alt=media&token=b8330c8f-7c35-4496-9093-950fa9654577"
        alt=""
      />
      <div class="p-24 md:p-40">
        <Logo />
      </div>
    </div>
  );
}
