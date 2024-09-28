import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useDatePickerStore from '../store/useDatePickerStore';

const DatePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePickerStore();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Select Start Date</h2>
      <Calendar
        onChange={(date) => setStartDate(date)}
        value={startDate}
        className="border border-gray-300 p-2 rounded-md"
      />
      <h2 className="text-lg font-bold mt-4">Select End Date (Optional)</h2>
      <Calendar
        onChange={(date) => setEndDate(date)}
        value={endDate || null}
        className="border border-gray-300 p-2 rounded-md"
      />
    </div>
  );
};

export default DatePicker;