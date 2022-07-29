import React from "react";
import Time from "./Time";
import Images from "./Images";
import Infos from "./Infos";

const Programme = (props) => {
  const { time, image, title, duration, type, isUnseen, direct } = props.item;
  return (
    <div className="content">
      <div>
        <Time time={time} />
        <Images image={image} />
        <Infos
          title={title}
          duration={duration}
          type={type}
          isUnseen={isUnseen}
          direct={direct}
        />
      </div>
    </div>
  );
};

export default Programme;
