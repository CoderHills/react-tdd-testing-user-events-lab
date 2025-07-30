import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Test for initial rendering of form inputs and button
test("renders the signup form with name, email, interests, and submit button", () => {
  render(<App />);

  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/technology/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/design/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/marketing/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
});

// Test for typing into name and email inputs
test("allows the user to type name and email", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);

  userEvent.type(nameInput, "John Doe");
  userEvent.type(emailInput, "john@example.com");

  expect(nameInput).toHaveValue("John Doe");
  expect(emailInput).toHaveValue("john@example.com");
});

// Test for selecting interests
test("allows the user to select interests", () => {
  render(<App />);

  const techCheckbox = screen.getByLabelText(/technology/i);
  const designCheckbox = screen.getByLabelText(/design/i);

  userEvent.click(techCheckbox);
  userEvent.click(designCheckbox);

  expect(techCheckbox).toBeChecked();
  expect(designCheckbox).toBeChecked();
});

// Test for form submission and success message
test("displays a success message with user details after form submission", () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const techCheckbox = screen.getByLabelText(/technology/i);
  const submitButton = screen.getByRole("button", { name: /subscribe/i });

  userEvent.type(nameInput, "John Doe");
  userEvent.type(emailInput, "john@example.com");
  userEvent.click(techCheckbox);
  userEvent.click(submitButton);

  expect(screen.getByText(/thank you, john doe/i)).toBeInTheDocument();
  expect(screen.getByText(/interests: technology/i)).toBeInTheDocument();
});
