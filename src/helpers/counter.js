export default function useCounter(number) {
  const increment = () => {
    number.value++;
  };

  const decrement = () => {
    number.value--;
  };

  return { increment, decrement };
}
