
import TextalignJustifycenter from "../../../assets/filled/TextalignJustifycenter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignJustifycenterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TextalignJustifycenter} data-testid="TextalignJustifycenterIcon" className={classes} />
  );
}
