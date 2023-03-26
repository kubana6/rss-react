const MIN_AGE = 18;

export const validateBirthday = (birthday: string): boolean => {
  const ageDiff = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDiff);
  const userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  return userAge >= MIN_AGE;
};

export function validateDate(date: string) {
  const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19[0-9]{2}|20[0-1][0-9]|2022)$/gm;
  return regex.test(date);
}
