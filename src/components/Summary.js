// src/components/Summary.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Summary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, additionalQuestions } = location.state || {};

  if (!formData) {
    navigate('/');
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl text-white mb-4">Summary</h2>
        <div className="text-gray-300">
          <p><strong>Full Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Survey Topic:</strong> {formData.surveyTopic}</p>
          {formData.surveyTopic === 'Technology' && (
            <>
              <p><strong>Language:</strong> {formData.tech.language}</p>
              <p><strong>Experience:</strong> {formData.tech.experience}</p>
            </>
          )}
          {formData.surveyTopic === 'Health' && (
            <>
              <p><strong>Frequency:</strong> {formData.health.frequency}</p>
              <p><strong>Diet:</strong> {formData.health.diet}</p>
            </>
          )}
          {formData.surveyTopic === 'Education' && (
            <>
              <p><strong>Qualification:</strong> {formData.education.qualification}</p>
              <p><strong>Field:</strong> {formData.education.field}</p>
            </>
          )}
          <p><strong>Feedback:</strong> {formData.feedback}</p>
          <h3 className="text-xl text-white mt-4">Additional Questions</h3>
          {additionalQuestions.map((question, index) => (
            <div key={question.id} className="text-gray-300">
              <p><strong>Question {index + 1}:</strong> {question.question}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
