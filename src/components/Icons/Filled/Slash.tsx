
import Slash from "../../../assets/filled/Slash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Slash} data-testid="SlashIcon" className={classes} />
  );
}
