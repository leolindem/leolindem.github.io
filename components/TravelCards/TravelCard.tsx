"use client";

import { Card, Center, Image, Anchor } from "@mantine/core";
import { motion } from "framer-motion";

export function TravelCard() {
  return (
    <>
      {" "}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Anchor href="/travel/yellowstone">
          <Card padding={0}>
            <Image src={"/Yellowstone.png"} h={300}></Image>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                style={{
                  color: "white",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <motion.h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  Yellowstone National Park
                </motion.h2>
              </motion.div>
            </motion.div>
          </Card>
        </Anchor>
      </motion.div>
    </>
  );
}
