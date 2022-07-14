
import Maker from "../../../assets/duotone/Maker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MakerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Maker} data-testid="MakerIcon" className={classes} />
  );
}
