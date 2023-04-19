import SuperButton from "../../common/SuperButton/SuperButton";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../../common/SuperInput/SuperInputText";
import SuperRadio from "../../common/SuperRadio/SuperRadio";
import SuperSelect from "../../common/SuperSelect/SuperSelect";

type IProps = {};

export const TestPage: React.FC<IProps> = ({}) => {
  return (
    <div>
      <SuperButton>Button</SuperButton>
      <SuperCheckbox>Checkbox</SuperCheckbox>
      <SuperEditableSpan></SuperEditableSpan>
      <SuperInputText></SuperInputText>
      <SuperRadio
        options={[
          { id: 1, value: "1" },
          { id: 2, value: "2" },
          { id: 3, value: "3" },
          { id: 4, value: "4" },
          { id: 5, value: "5" },
        ]}
      />
      <SuperSelect
        value={"3"}
        options={[
          { id: 1, value: "1" },
          { id: 2, value: "2" },
          { id: 3, value: "3" },
          { id: 4, value: "4" },
        ]}
      />
    </div>
  );
};
