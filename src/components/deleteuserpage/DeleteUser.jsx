import React, { useState, useEffect } from 'react';
import { FormContainer, Input, Label, Button, ErrorText } from '../deleteuserpage/DeleteUser.styles';
import Loader from '../loader/ApiLoders';
const DeleteUser = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("User deletion requested:", formData);
    }
  };

  return loading ? (
    <Loader/>
  ) : (
    <FormContainer>
      <h2>User Deletion</h2>
      <form onSubmit={handleSubmit}>
        <Label>Email <span>*</span></Label>
        <Input 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}

        <Label>Password <span>*</span></Label>
        <Input 
          type="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
        />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}

        <Button type="submit">Confirm Deletion</Button>
      </form>
    </FormContainer>
  );
};

export default DeleteUser;
