
import Grid6 from "../../../assets/filled/Grid6.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid6Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grid6 data-testid="Grid6Icon" className={classes} />
  );
}
