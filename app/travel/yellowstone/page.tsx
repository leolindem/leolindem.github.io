"use client";

import { Center, Container, Title, Stack, Image, Grid } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";

interface Location {
  id: string;
  cx: number;
  cy: number;
  name: string;
}

export default function Yellowstone() {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const locations: Location[] = [
    { id: "start", cx: 755, cy: 145, name: "Starting Point" },
    { id: "chicago", cx: 700, cy: 170, name: "Chicago" },
    { id: "madison", cx: 675, cy: 145, name: "Madison" },
    { id: "sioux", cx: 574, cy: 149, name: "Sioux Falls" },
    { id: "badlands", cx: 490, cy: 148, name: "Badlands" },
    { id: "buffalo", cx: 430, cy: 142, name: "Buffalo" },
    { id: "yellowstone", cx: 370, cy: 135, name: "Yellowstone" },
    { id: "teton", cx: 365, cy: 160, name: "Grand Teton" },
    { id: "slc", cx: 335, cy: 190, name: "Salt Lake City" },
    { id: "reno", cx: 225, cy: 190, name: "Reno" },
    { id: "bay", cx: 170, cy: 220, name: "San Francisco Bay" },
  ];

  const connections = [
    { from: { x: 755, y: 145 }, to: { x: 700, y: 170 } }, // start → chicago
    { from: { x: 700, y: 170 }, to: { x: 675, y: 145 } }, // chicago → madison
    { from: { x: 675, y: 145 }, to: { x: 574, y: 149 } }, // madison → sioux
    { from: { x: 574, y: 149 }, to: { x: 490, y: 148 } }, // sioux → badlands
    { from: { x: 490, y: 148 }, to: { x: 430, y: 142 } }, // badlands → buffalo
    { from: { x: 430, y: 142 }, to: { x: 370, y: 135 } }, // buffalo → yellowstone
    { from: { x: 370, y: 135 }, to: { x: 365, y: 160 } }, // yellowstone → teton
    { from: { x: 365, y: 160 }, to: { x: 335, y: 190 } }, // teton → slc
    { from: { x: 335, y: 190 }, to: { x: 225, y: 190 } }, // slc → reno
    { from: { x: 225, y: 190 }, to: { x: 170, y: 220 } }, // reno → bay
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Stack gap="xl" py="xl">
      <Center>
        <div
          style={{ position: "relative", width: "70%", height: "auto" }}
          onMouseMove={handleMouseMove}
        >
          {/* Background US Map */}
          <Image
            src="/us.svg"
            alt="United States Map"
            width={100}
            height={50}
            style={{
              width: "100%",
              height: "auto",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
            }}
          />

          {/* Overlay SVG with animated elements */}
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            {/* Connection Lines */}
            {connections.map((connection, index) => (
              <motion.line
                key={`line-${index}`}
                x1={connection.from.x}
                y1={connection.from.y}
                x2={connection.to.x}
                y2={connection.to.y}
                stroke="#6495ED"
                strokeWidth="4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Animated Circles */}
            {locations.map((location, index) => (
              <motion.circle
                key={location.id}
                cx={location.cx}
                cy={location.cy}
                r="8"
                fill="#6495ED"
                stroke="#ffffff"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.5,
                  transition: { duration: 0.2 },
                }}
                onHoverStart={() => setHoveredLocation(location)}
                onHoverEnd={() => setHoveredLocation(null)}
                style={{ cursor: "pointer", pointerEvents: "all" }}
              />
            ))}
          </svg>

          {/* Tooltip */}
          {hoveredLocation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                left: mousePosition.x - 50,
                top: mousePosition.y - 60,
                backgroundColor: "#2d3748",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "500",
                pointerEvents: "none",
                zIndex: 1000,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                whiteSpace: "nowrap",
              }}
            >
              {hoveredLocation.name}
            </motion.div>
          )}
        </div>
      </Center>
      <Center>
        <Grid grow>
          <Grid.Col span={4}>
            <Center>
              <Image
                src="/RoadTrip_US/IMG_2107.jpeg"
                w={600}
                alt="Michigan tower"
              />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image
                src="/RoadTrip_US/IMG_2211.jpeg"
                w={600}
                alt="Yellowstone Lake"
              />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image
                src="/RoadTrip_US/IMG_2123.jpeg"
                w={600}
                alt="Chicago restaurant"
              />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image src="/RoadTrip_US/IMG_2150.jpeg" w={600} alt="Cheese" />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image
                src="/RoadTrip_US/IMG_2226.jpeg"
                w={600}
                alt="Waterfall Hike"
              />
            </Center>
          </Grid.Col>

          <Grid.Col span={4}>
            <Center>
              <Image src="/RoadTrip_US/IMG_2197.jpeg" w={600} alt="Waterfall" />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image src="/RoadTrip_US/IMG_2162.jpeg" w={600} alt="Badlands" />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image src="/RoadTrip_US/IMG_2257.jpeg" w={600} alt="Badlands" />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image src="/RoadTrip_US/IMG_2279.jpeg" w={600} alt="Badlands" />
            </Center>
          </Grid.Col>
          <Grid.Col span={4}>
            <Center>
              <Image src="/RoadTrip_US/IMG_2275.jpeg" w={600} alt="Badlands" />
            </Center>
          </Grid.Col>
        </Grid>
      </Center>
    </Stack>
  );
}