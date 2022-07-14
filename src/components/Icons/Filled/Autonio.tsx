
import Autonio from "../../../assets/filled/Autonio.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AutonioIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Autonio} data-testid="AutonioIcon" className={classes} />
  );
}
