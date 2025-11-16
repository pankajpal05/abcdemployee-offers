
const isEmailValidChecker = (email :string) =>
  /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)?@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(email);

const isPhoneValidChecker = (num :string) => /^[6-9]\d{9}$/.test(num);


export { isEmailValidChecker, isPhoneValidChecker };