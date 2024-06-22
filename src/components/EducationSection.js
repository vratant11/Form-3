import React from 'react';

function EducationSection({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      education: {
        ...prevState.education,
        [name]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-300">Education Section</h3>
      <div>
        <label className="block text-gray-300">Highest Qualification</label>
        <select name="qualification" value={formData.education.qualification} onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
          <option value="">Select Qualification</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
        </select>
        {errors.qualification && <span className="text-red-500">{errors.qualification}</span>}
      </div>

      <div>
        <label className="block text-gray-300">Field of Study</label>
        <input type="text" name="field" value={formData.education.field} onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
        />
        {errors.field && <span className="text-red-500">{errors.field}</span>}
      </div>
    </div>
  );
}

export default EducationSection;
