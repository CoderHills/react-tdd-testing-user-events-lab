import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setInterests((prev) =>
      checked ? [...prev, value] : prev.filter((interest) => interest !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Subscribe to Our Newsletter</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="Technology"
                onChange={handleCheckboxChange}
              />
              Technology
            </label>
            <label>
              <input
                type="checkbox"
                value="Design"
                onChange={handleCheckboxChange}
              />
              Design
            </label>
            <label>
              <input
                type="checkbox"
                value="Marketing"
                onChange={handleCheckboxChange}
              />
              Marketing
            </label>
          </div>
          <button type="submit">Subscribe</button>
        </form>
      ) : (
        <div>
          <h2>Thank you, {name}!</h2>
          <p>Email: {email}</p>
          <p>Interests: {interests.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
