import React from "react";
import Electronic from "./electronic";

function Flipkart({mobile}) {
  return (
    <div>
      <h1>Welcome to Flipkart</h1>
      <p>Shop for electronics, fashion, home essentials, and more.</p>
      <Electronic mobile={mobile} />
    </div>
  );
}

export default Flipkart;