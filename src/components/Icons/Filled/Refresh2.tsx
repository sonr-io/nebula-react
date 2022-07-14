
import Refresh2 from "../../../assets/filled/Refresh2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Refresh2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Refresh2 data-testid="Refresh2Icon" className={classes} />
  );
}
