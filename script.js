const form = document.createElement('form');

const createInput = (placeholder, type, name) => {
  const input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  input.name = name;

  return input;
};

const createLabel = (inputName, labelText) => {
  const label = document.createElement('label');
  label.for = inputName;
  label.innerText = labelText;
  return label;
}

const createFormGroup = (input, label) => {
  const container = document.createElement('div');
  container.append(label, input);

  return container;
}

const formObject = {
  firstName: {
    type: 'text',
    placeholder: 'First Name'
  },
  lastName: {
    type: 'text',
    placeholder: 'Last Name'
  },
  ses: {}
}

const renderArray = Object.keys(formObject).map(inputName => {
  const {
    type = 'text',
    placeholder = 'My Input',
    labelText = 'My Input'
  } = formObject[inputName];
  const input = createInput(placeholder, type, inputName);
  const label = createLabel(inputName, labelText);
  return createFormGroup(input, label);
});

form.append(
  ...renderArray
);

document.body.append(form);