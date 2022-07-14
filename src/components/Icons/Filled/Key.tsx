
import Key from "../../../assets/filled/Key.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Key} data-testid="KeyIcon" className={classes} />
  );
}
