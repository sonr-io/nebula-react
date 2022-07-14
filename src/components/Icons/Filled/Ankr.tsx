
import Ankr from "../../../assets/filled/Ankr.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AnkrIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Ankr} data-testid="AnkrIcon" className={classes} />
  );
}
