// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import TechnologySection from './components/TechnologySection';
import HealthSection from './components/HealthSection';
import EducationSection from './components/EducationSection';
import Summary from './components/Summary';
import useValidation from './hooks/useValidation';
import './index.css';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    tech: { language: '', experience: '' },
    health: { frequency: '', diet: '' },
    education: { qualification: '', field: '' },
    feedback: '',
  });

  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [errors, validate] = useValidation(formData);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.surveyTopic) {
      axios.get(`/.netlify/functions/getQuestions?topic=${formData.surveyTopic}`)
        .then(response => setAdditionalQuestions(response.data))
        .catch(error => console.error(error));
    }
  }, [formData.surveyTopic]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/summary', { state: { formData, additionalQuestions } });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <div>
          <label className="block text-gray-300">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
          />
          {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
        </div>

        <div>
          <label className="block text-gray-300">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>

        <div>
          <label className="block text-gray-300">Survey Topic</label>
          <select name="surveyTopic" value={formData.surveyTopic} onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
            <option value="">Select Topic</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
          {errors.surveyTopic && <span className="text-red-500">{errors.surveyTopic}</span>}
        </div>

        {formData.surveyTopic === 'Technology' && <TechnologySection formData={formData} setFormData={setFormData} errors={errors} />}
        {formData.surveyTopic === 'Health' && <HealthSection formData={formData} setFormData={setFormData} errors={errors} />}
        {formData.surveyTopic === 'Education' && <EducationSection formData={formData} setFormData={setFormData} errors={errors} />}

        <div>
          <label className="block text-gray-300">Feedback</label>
          <textarea name="feedback" value={formData.feedback} onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
          />
          {errors.feedback && <span className="text-red-500">{errors.feedback}</span>}
        </div>

        <button type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Submit
        </button>
      </form>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
