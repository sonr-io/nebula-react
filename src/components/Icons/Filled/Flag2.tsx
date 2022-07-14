
import Flag2 from "../../../assets/filled/Flag2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Flag2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Flag2 data-testid="Flag2Icon" className={classes} />
  );
}
