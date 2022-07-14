
import TextalignCenter from "../../../assets/duotone/TextalignCenter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignCenterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TextalignCenter} data-testid="TextalignCenterIcon" className={classes} />
  );
}
