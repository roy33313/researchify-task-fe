import { useRef, useEffect } from "react";
import DatePicker from "react-horizontal-datepicker";
import "../../styles/HorizontalDateRange.css";

function HorizontalDateRange({ onChange }) {
  const datePickerRef = useRef(null);

  useEffect(() => {
    const dayLabels = datePickerRef.current.querySelectorAll(
      "._dayLabel_ghqxn_78"
    );
    dayLabels.forEach((label) => {
      const truncatedText = label.textContent.slice(0, 2);
      label.textContent = truncatedText;
    });
  }, []);

  return (
    <div ref={datePickerRef}>
      <DatePicker
        getSelectedDay={onChange}
        endDate={100}
        selectDate={new Date()}
        labelFormat={"MMMM"}
        color={"#5541F7"}
      />
      {/* <CalendarBox>
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
            <DayBox key={index} isSelected={index === 1}>
              <Typography
                color={index === 1 ? "#5541F7" : "textSecondary"}
                fontWeight={600}
              >
                {day}
              </Typography>
              <Typography
                fontWeight={400}
                color={index === 1 ? "#5541F7" : "textPrimary"}
              >
                {index + 3}
              </Typography>
            </DayBox>
          ))}
        </CalendarBox> */}
    </div>
  );
}

export default HorizontalDateRange;
