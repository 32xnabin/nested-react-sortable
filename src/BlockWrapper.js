import React from "react";

import styled from "styled-components";
import Container from "./Container";

const StyledBlockWrapper = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 4px;
  cursor: move;
  &:hover {
    //background: #eeeeee;
  }
`;
export default function BlockWrapper({ block, blockIndex, setBlocks }) {
    // console.log(block);
    if (!block) return null;
    if (block.type === "container") {
      return (
        <StyledBlockWrapper className="block">
          container: {block.content}
          <Container
            block={block}
            setBlocks={setBlocks}
            blockIndex={blockIndex}
          />
        </StyledBlockWrapper>
      );
    } else {
      return (
        <StyledBlockWrapper className="block">
          text: {block.content}
        </StyledBlockWrapper>
      );
    }
  }