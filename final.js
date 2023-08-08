let user = document.getElementById("user");
let entries = [];
const retrieve = () => {
  let getentries = localStorage.getItem("entries");
  if (getentries === true) {
    getentries = JSON.parse(getentries);
  } else {
    getentries = [];
  }
  return getentries;
};
displayEntries = () => {
  let entries = retrieve();
  table = entries
    .map((values) => {
      names = `<td class='border px-5 py-2'>${values.FullName}</td>`;
      email = `<td class='border px-5 py-2'>${values.email}</td>`;
      password = `<td class='border px-5 py-2'>${values.password}</td>`;
      dob = `<td class='border px-5 py-2'>${values.dob}</td>`;
      terms = `<td class='border px-5 py-2'>${values.terms}</td>`;
      data = `<tr>${names} ${email} ${password} ${dob} ${terms}</tr>`;
      return data;
    })
    .join("\n");
  const tableBody = document.querySelector("#entries table body");
  tableBody.innerHTML = tableEntries; // Add the table entries to the <tbody> element
};

saveUserForm = (value) => {
  value.preventDefault();
  FullName = document.getElementById("name").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  dob = document.getElementById("dob").value;
  terms = document.getElementById("acceptTerms").checked;
  let currentYear = new Date().getFullYear();
  let birthYear = dob.split("-");
  let year = birthYear[0];
  let age = currentYear - year;
  console.log({ age, currentYear, birthYear });
  if (age < 18 || age > 55) {
    document.getElementById("dob");
    return alert("Age must be between 18 and 55");
  } else {
    document.getElementById("dob");

    data = {
      FullName,
      email,
      password,
      dob,
      terms,
    };
    entries = retrieve();
    entries.push(data);
    localStorage.setItem("entries", JSON.stringify(entries));
    displayEntries();
    user.reset();
  }
};
user.addEventListener("submit", saveUserForm);
displayEntries();
