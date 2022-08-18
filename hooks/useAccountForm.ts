import * as React from 'react';

function useAccountForm() {
  const [inputValues, setInputValues] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [inputErrors, setInputErrors] = React.useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = React.useCallback((element: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  }, []);

  function handleBlur(element: React.ChangeEvent<HTMLInputElement>) {
    setInputErrors((prev) => ({
      ...prev,
      [element.target.id]: element.target.value === '',
    }));
  }

  return [inputValues, handleChange, handleBlur, inputErrors] as const;
}

export default useAccountForm;
