const formData = {
  email: "",
  message: ""
}

const saveToLocalStorage = () => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem("feedback-form-state");
  if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData.email = parsedData.email || "";
      formData.message = parsedData.message || "";
      document.querySelector('input[name="email"]').value = formData.email;
      document.querySelector('textarea[name="message"]').value = formData.message;
  }
};

document.querySelector('.feedback-form').addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveToLocalStorage();
});

document.querySelector('.feedback-form').addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
  }
  console.log(formData);

  localStorage.removeItem("feedback-form-state");
  formData.email = "";
  formData.message = "";
  document.querySelector('.feedback-form').reset();
});

loadFromLocalStorage();