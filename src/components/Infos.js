import React from "react";
import Duration from "./Duration";
import Type from "./Type";
import Title from "./Title";
import IsUnseen from "./IsUnseen";
import Direct from "./Direct";

const Infos = (props) => {
  const { duration, title, type, isUnseen, direct } = props;
  return (
    <div className="infos">
      <Title title={title} />
      <div>
        <Type type={type} />

        <Duration duration={duration} />
        {isUnseen && <IsUnseen />}
        {direct && <Direct />}
      </div>
    </div>
  );
};

export default Infos;
