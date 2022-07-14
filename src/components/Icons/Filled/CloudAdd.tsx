
import CloudAdd from "../../../assets/filled/CloudAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudAdd data-testid="CloudAddIcon" className={classes} />
  );
}
