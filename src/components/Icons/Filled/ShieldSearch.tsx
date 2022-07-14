
import ShieldSearch from "../../../assets/filled/ShieldSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShieldSearch} data-testid="ShieldSearchIcon" className={classes} />
  );
}
