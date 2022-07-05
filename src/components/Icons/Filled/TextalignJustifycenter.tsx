
import TextalignJustifycenter from "../../../assets/filled/TextalignJustifycenter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TextalignJustifycenterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TextalignJustifycenter data-testid="TextalignJustifycenterIcon" className={classes} />
  );
}
