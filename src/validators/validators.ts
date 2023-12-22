export const INPUT_REGEXP = /^[a-zA-Z0-9]+$/;

export const isValidInput = (value: string): boolean => INPUT_REGEXP.test(value);
