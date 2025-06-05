import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import BlockWrapper from "./BlockWrapper";


const sortableOptions = {
  animation: 150,
  fallbackOnBody: true,
  swapThreshold: 0.65,
  ghostClass: "ghost",
  group: "shared",
  forceFallback: true
};

export default function App() {
  const [blocks, setBlocks] = useState([
    {
      id: 1,
      content: "item 1",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 2,
          content: "item 2",
          width: 3,
          type: "text",
          parent_id: 1
        },
        {
          id: 3,
          content: "item 3",
          width: 3,
          type: "text",
          parent_id: 1
        }
      ]
    },
    {
      id: 4,
      content: "item 2",
      parent_id: null,
      type: "container",
      children: [
        {
          id: 5,
          content: "item 5",
          width: 3,
          parent_id: 2,
          type: "container",
          children: [
            { id: 8, content: "item 8", width: 6, type: "text", parent_id: 5 },
            { id: 9, content: "item 9", width: 6, type: "text", parent_id: 5 }
          ]
        },
        {
          id: 6,
          content: "item 6",
          width: 2,
          type: "text",
          parent_id: 2
        },
        {
          id: 7,
          content: "item 7",
          width: 2,
          type: "text",
          parent_id: 2
        }
      ]
    }
  ]);

  return (
    <div>
      <ReactSortable list={blocks} setList={setBlocks} {...sortableOptions}>
        {blocks.map((block, blockIndex) => (
          <BlockWrapper
            key={block.id}
            block={block}
            blockIndex={[blockIndex]}
            setBlocks={setBlocks}
          />
        ))}
      </ReactSortable>
    </div>
  );
}


