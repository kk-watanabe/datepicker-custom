import { storiesOf } from "@storybook/vue";
import { select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { DateRange } from "@/components/calendar/Calendar";
import { DateRangeInput } from "@/components/date-picker/DatePicker";
import DateRangePickerContainer from "@/components/date-picker/DateRangePickerContainer.vue";

const dates: DateRange = {
  min: new Date("2020-02-15"),
  max: new Date("2020-03-10")
};

storiesOf("date-picker/DateRangePickerContainer", module).add(
  "default",
  () => ({
    components: { DateRangePickerContainer },
    data() {
      return {
        dates
      };
    },
    props: {
      disabled: {
        default: boolean("Disabled", false)
      },
      focus: {
        default: select("Focus", DateRangeInput, DateRangeInput.Start)
      }
    },
    methods: {
      onClick: action("click"),
      onMoveCalendar: action("click-switch")
    },
    template: `
      <DateRangePickerContainer
       v-model="dates"
       :disabled="disabled"
       :focus="focus" />`
  }),
  {
    info: {
      summary: "Simple DateRangePickerContainer component"
    }
  }
);
