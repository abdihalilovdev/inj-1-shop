import React, { useState } from "react";

const ModalImage = ({ el }) => {
  const [modal, setModal] = useState(true);
  return (
    <div>
      <img
        onClick={() => setModal(false)}
        src={el.image}
        alt="img"
        width="45"
      />
      <div
        onClick={() => setModal(true)}
        hidden={modal}
        className="fixed top-0 left-0 right-0 bottom-0 bg-black/55"
      />
      <div hidden={modal} className="fixed top-[15%] left-[26%]">
        <img className="rounded product-img" src={el.image} alt="img" width="400" />
      </div>
    </div>
  );
};

export default ModalImage;
