import React from "react";
import { createPortal } from "react-dom";

function PopupContent({ copied }) {
  return createPortal(
    <div>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem" }}>
          Copied to clipboard
        </div>
      )}
    </div>,
    document.getElementById("content")
  );
}

export default PopupContent;
