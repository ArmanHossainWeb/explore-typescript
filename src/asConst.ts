// You can use "as const" with objects to get enum-like behavior in TypeScript

const Directions = {
    Up: "Up",
    Down: "Down",
    Left: "Left",
    Right: "Right",
} as const;

type Direction = (typeof Directions)[keyof typeof Directions];

const move = (dir: Direction) => {
    console.log(`Moving ${dir}`);
};

move(Directions.Up); // Output: Moving Up