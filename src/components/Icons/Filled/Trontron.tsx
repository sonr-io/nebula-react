
import Trontron from "../../../assets/filled/Trontron.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrontronIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Trontron} data-testid="TrontronIcon" className={classes} />
  );
}
