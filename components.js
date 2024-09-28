import useDatePickerStore from '../store/useDatePickerStore';

const components = () => {
  const { recurrencePattern, setRecurrencePattern } = useDatePickerStore();

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold">Recurrence Pattern</h2>
      <select
        value={recurrencePattern}
        onChange={(e) => setRecurrencePattern(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-full mt-2"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};
export default components;