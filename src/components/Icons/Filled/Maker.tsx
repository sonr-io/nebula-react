
import Maker from "../../../assets/filled/Maker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MakerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Maker data-testid="MakerIcon" className={classes} />
  );
}
