import { useState } from 'react';

function useValidation(formData) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid Email is required';
    if (!formData.surveyTopic) newErrors.surveyTopic = 'Survey Topic is required';

    if (formData.surveyTopic === 'Technology') {
      if (!formData.tech.language) newErrors.language = 'Favorite Programming Language is required';
      if (!formData.tech.experience || formData.tech.experience <= 0) newErrors.experience = 'Years of Experience must be greater than 0';
    }

    if (formData.surveyTopic === 'Health') {
      if (!formData.health.frequency) newErrors.frequency = 'Exercise Frequency is required';
      if (!formData.health.diet) newErrors.diet = 'Diet Preference is required';
    }

    if (formData.surveyTopic === 'Education') {
      if (!formData.education.qualification) newErrors.qualification = 'Highest Qualification is required';
      if (!formData.education.field) newErrors.field = 'Field of Study is required';
    }

    if (!formData.feedback || formData.feedback.length < 50) newErrors.feedback = 'Feedback must be at least 50 characters long';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return [errors, validate];
}

export default useValidation;
