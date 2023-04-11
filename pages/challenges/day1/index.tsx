import { useState } from "react";

const tree = {
  name: "Root",
  children: [
    {
      name: "pages",
      children: [
        {
          name: "api",
          children: [
            {
              name: "hello.ts",
            },
          ],
        },
      ],
    },
    {
      name: "README.MD",
    },
    {
      name: "tailwind.config.js",
    },
  ],
};

export default function index() {
  return (
    <div>
      <div>
        <TreeStructure dir={tree} />
      </div>
    </div>
  );
}

export function TreeStructure({ dir, showing = true }) {
  const [show, setShow] = useState(true);
  // if (dir.children) {
  //   print(dir);
  // }
  // if (dir?.children) {
  //   dir.children.map((innerDir) => <TreeStructure dir={innerDir} />);
  //   // TreeStructure(dir.children)
  // }
  function print(dir) {
    return dir.children.map((innerDir) => (
      <TreeStructure dir={innerDir} showing={show} />
    ));
  }

  console.log(dir);

  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <div>
      <div className={showing ? "" : "hidden"}>{dir.name}</div>
      <button onClick={handleClick}>{dir.children ? print(dir) : null}</button>
    </div>
  );
}
