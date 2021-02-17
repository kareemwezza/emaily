const reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// i will split the list of the emails
//then map over them to make an array
//and delete extra white spaces
//then filter them to extract the wrong emails using the regex service
export default (emails) => {
  const invalidEmails = emails
    .split(",")
    .map((email) => email.trim())
    .filter((email) => reg.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid ${invalidEmails}`;
  }
  return;
};
