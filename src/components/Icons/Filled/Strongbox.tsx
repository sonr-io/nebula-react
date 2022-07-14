
import Strongbox from "../../../assets/filled/Strongbox.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StrongboxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Strongbox data-testid="StrongboxIcon" className={classes} />
  );
}
