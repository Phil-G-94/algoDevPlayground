const licensePlateGenerator = (data) => {
  if (!Array.isArray(data) || data.length < 5) return undefined;

  const [forename, midname, surnameRaw, dobRaw, gender] = data;

  const dob = new Date(dobRaw);

  const yearString = dob.getFullYear().toString();
  const decadeDigit = yearString[2];
  const yearDigit = yearString[3];

  let month = dob.getMonth() + 1;

  if (gender.toUpperCase() === "F") month += 50;

  const monthString = month.toString().padStart(2, "0");

  const dayString = dob.getDate().toString().padStart(2, "0");

  const surname = surnameRaw.padEnd(5, "9").slice(0, 5);

  const firstInitial = forename[0];
  const middleInitial = midname ? midname[0].toUpperCase() : "9";

  return `${surname}${decadeDigit}${monthString}${dayString}${yearDigit}${firstInitial}${middleInitial}9AA`.toUpperCase();
};

module.exports = licensePlateGenerator;
