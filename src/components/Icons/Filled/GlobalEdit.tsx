
import GlobalEdit from "../../../assets/filled/GlobalEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlobalEditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GlobalEdit data-testid="GlobalEditIcon" className={classes} />
  );
}
