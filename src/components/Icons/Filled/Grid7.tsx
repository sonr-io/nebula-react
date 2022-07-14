
import Grid7 from "../../../assets/filled/Grid7.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid7Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grid7 data-testid="Grid7Icon" className={classes} />
  );
}