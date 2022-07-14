
import Logout1 from "../../../assets/filled/Logout1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Logout1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Logout1} data-testid="Logout1Icon" className={classes} />
  );
}
