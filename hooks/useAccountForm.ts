import * as React from 'react';

function useAccountForm() {
  const [inputValues, setInputValues] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = React.useCallback((element: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prev) => ({
      ...prev,
      [element.target.id]: element.target.value,
    }));
  }, []);

  return [inputValues, handleChange];
}

export default useAccountForm;
