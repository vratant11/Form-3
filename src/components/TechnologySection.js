import React from 'react';

function TechnologySection({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      tech: {
        ...prevState.tech,
        [name]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-300">Technology Section</h3>
      <div>
        <label className="block text-gray-300">Favorite Programming Language</label>
        <select name="language" value={formData.tech.language} onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
          <option value="">Select Language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
        </select>
        {errors.language && <span className="text-red-500">{errors.language}</span>}
      </div>

      <div>
        <label className="block text-gray-300">Years of Experience</label>
        <input type="number" name="experience" value={formData.tech.experience} onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
        />
        {errors.experience && <span className="text-red-500">{errors.experience}</span>}
      </div>
    </div>
  );
}

export default TechnologySection;
