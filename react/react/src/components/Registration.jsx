import { useState } from "react";
import { z } from "zod";
import "./Registration.css";

const emptyForm = { username: "", email: "", number: "" };
const schema = z.object({
  username: z.string().min(3, "Enter at least 3 characters."),
  email: z.string().email("Enter a valid email address."),
  number: z.string().regex(/^[0-9]{10}$/, "Enter exactly 10 digits."),
});

function Registration() {
  const [formData, setFormData] = useState(emptyForm);
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: [] }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    if (editingUserId) {
      setUsers((current) =>
        current.map((user) =>
          user.id === editingUserId ? { ...user, ...formData } : user,
        ),
      );
      setEditingUserId(null);
    } else {
      setUsers((current) => [...current, { id: crypto.randomUUID(), ...formData }]);
    }

    setFormData(emptyForm);
  }

  function handleEdit(user) {
    setFormData({ username: user.username, email: user.email, number: user.number });
    setEditingUserId(user.id);
    setErrors({});
  }

  function handleDelete(userId) {
    setUsers((current) => current.filter((user) => user.id !== userId));
    if (editingUserId === userId) {
      cancelEdit();
    }
  }

  function cancelEdit() {
    setEditingUserId(null);
    setFormData(emptyForm);
    setErrors({});
  }

  return (
    <section className="registration page-content">
      <div className="registration__panel">
        <h2>Registration Form</h2>
        <form className="registration__form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              autoComplete="name"
              name="username"
              onChange={handleChange}
              placeholder="Enter username"
              required
              value={formData.username}
            />
            {errors.username?.[0] && <span role="alert">{errors.username[0]}</span>}
          </label>
          <label>
            Email
            <input
              autoComplete="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
              required
              type="email"
              value={formData.email}
            />
            {errors.email?.[0] && <span role="alert">{errors.email[0]}</span>}
          </label>
          <label>
            Number
            <input
              autoComplete="tel"
              name="number"
              onChange={handleChange}
              placeholder="Enter number"
              required
              type="tel"
              value={formData.number}
            />
            {errors.number?.[0] && <span role="alert">{errors.number[0]}</span>}
          </label>
          <button type="submit">{editingUserId ? "Update user" : "Register"}</button>
          {editingUserId && (
            <button className="button-secondary" onClick={cancelEdit} type="button">
              Cancel edit
            </button>
          )}
        </form>
      </div>

      <div className="registration__panel">
        <h2>Registered Users</h2>
        <p className="registration__count">{users.length} users</p>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td className="registration__empty" colSpan="4">
                    No users registered yet.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                    <td className="registration__actions">
                      <button onClick={() => handleEdit(user)} type="button">
                        Edit
                      </button>
                      <button
                        className="button-danger"
                        onClick={() => handleDelete(user.id)}
                        type="button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Registration;
