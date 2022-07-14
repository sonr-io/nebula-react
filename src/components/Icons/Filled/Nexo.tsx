
import Nexo from "../../../assets/filled/Nexo.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NexoIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Nexo} data-testid="NexoIcon" className={classes} />
  );
}
