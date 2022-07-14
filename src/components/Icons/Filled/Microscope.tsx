
import Microscope from "../../../assets/filled/Microscope.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MicroscopeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Microscope} data-testid="MicroscopeIcon" className={classes} />
  );
}
