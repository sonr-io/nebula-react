import cx from 'classnames';

import { Input } from "../Input";
import { LabelInputProps } from "../../types/inputProps";

const textClasses = "text-gray-600 text-sm"

export const LabelInput: React.FC<LabelInputProps> = ({ label, caption, vertical, ...rest }) => {
  return (
    <div className={!vertical ? "flex gap-3" : ''}>
      {label && <span className={cx(textClasses, { 'mt-2.5': !vertical })}>{label}</span>}
      <div>
        <Input {...rest} />
        {caption && <span className={textClasses}>{caption}</span>}
      </div>
    </div>
  )
}
