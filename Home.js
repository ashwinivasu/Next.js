import Head from 'next/head';
import RecurrenceOptions from '../components/RecurrenceOptions';
import DatePicker from '../components/DatePicker';
import styles from '../styles/Home.module.css';
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Head>
        <title>Date Picker with Recurrence</title>
      </Head>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Date Picker</h1>
        <DatePicker />
        <RecurrenceOptions />
      </div>
    </div>
  );
};

export default Home;
