import React from "react";

const Page = () => {
  const listBilangan = [1, 2, 3, 4, 5];
  const displaylist = listBilangan.map((item) => (
    <React.Fragment key={item}>
      <li>{item}</li>
    </React.Fragment>
  ));
  return (
    <>
      <h3>hello</h3>
      <ul>{displaylist}</ul>
    </>
  );
};

export default Page;
