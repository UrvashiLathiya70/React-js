// eslint-disable-next-line import/no-unresolved
import { useSnackbar } from 'notistack';

const useSnackbarHelper = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSnackbar = (variant, message) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: 2000,
    });
  };

  return {
    handleSnackbar,
  };
};

export default useSnackbarHelper;

export function formatDate(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

export function calculateDuration(startDateString, endDateString) {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  const durationInMilliseconds = endDate - startDate;

  // Calculate hours and minutes
  const hours = Math.floor(durationInMilliseconds / (60 * 60 * 1000));
  const minutes = Math.floor((durationInMilliseconds % (60 * 60 * 1000)) / (60 * 1000));

  const duration = `${hours} hours ${minutes} minutes`;

  return duration;
}
