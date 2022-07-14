
import Smileys from "../../../assets/filled/Smileys.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SmileysIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Smileys} data-testid="SmileysIcon" className={classes} />
  );
}
