import { storiesOf } from "@storybook/vue";
import { boolean, text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { DateRange } from "@/components/calendar/Calendar";
import { PopupAlign } from "@/components/date-picker/DatePicker";
import DatePickerRangeChangeInput from "@/components/date-picker/DatePickerRangeChangeInput.vue";

const selectedDates: DateRange = {
  min: new Date("2020-02-15"),
  max: new Date("2020-03-03")
};

const disabledDates: DateRange = {
  min: new Date("2020-01-15"),
  max: new Date("2020-03-20")
};

storiesOf("date-picker/DatePickerRangeChangeInput", module)
  .add(
    "default",
    () => ({
      components: { DatePickerRangeChangeInput },
      data() {
        return {
          disabledDates
        };
      },
      props: {
        disabled: {
          default: boolean("Disabled", false)
        },
        width: {
          default: text("Width", "350px")
        },
        align: {
          default: select("align", PopupAlign, PopupAlign.Left)
        }
      },
      methods: {
        onInput: action("input"),
        onReset: action("reset")
      },
      template: `
      <DatePickerRangeChangeInput
       :width="width"
       :disabled="disabled"
       :disabled-dates="disabledDates"
       :align="align"
       @input="onInput"
       @reset="onReset" />`
    }),
    {
      info: {
        summary: "Simple DatePickerRangeChangeInput component"
      }
    }
  )
  .add(
    "set props",
    () => ({
      components: { DatePickerRangeChangeInput },
      data() {
        return {
          disabledDates,
          selectedDates
        };
      },
      props: {
        disabled: {
          default: boolean("Disabled", false)
        },
        width: {
          default: text("Width", "350px")
        },
        align: {
          default: select("align", PopupAlign, PopupAlign.Left)
        }
      },
      methods: {
        onInput: action("input"),
        onReset: action("reset")
      },
      template: `
      <DatePickerRangeChangeInput
       :width="width"
       :disabled="disabled"
       :disabled-dates="disabledDates"
       :selected-dates="selectedDates"
       :align="align"
       @input="onInput"
       @reset="onReset" />`
    }),
    {
      info: {
        summary: "Simple DatePickerRangeChangeInput component"
      }
    }
  );
