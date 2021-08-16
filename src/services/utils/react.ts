export const mergeRefs = (...inputRefs: any[]) => {
  const filteredInputRefs = inputRefs.filter(Boolean);

  if (filteredInputRefs.length <= 1) {
    return filteredInputRefs[0];
  }

  return (ref: any) => {
    filteredInputRefs.forEach((inputRef) => {
      if (typeof inputRef === 'function') {
        inputRef(ref);
      } else {
        // eslint-disable-next-line no-param-reassign
        inputRef.current = ref;
      }
    });
  };
};
