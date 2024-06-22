import React from 'react';

function HealthSection({ formData, setFormData, errors }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      health: {
        ...prevState.health,
        [name]: value
      }
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-300">Health Section</h3>
      <div>
        <label className="block text-gray-300">Exercise Frequency</label>
        <select name="frequency" value={formData.health.frequency} onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
          <option value="">Select Frequency</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Rarely">Rarely</option>
        </select>
        {errors.frequency && <span className="text-red-500">{errors.frequency}</span>}
      </div>

      <div>
        <label className="block text-gray-300">Diet Preference</label>
        <select name="diet" value={formData.health.diet} onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white">
          <option value="">Select Diet</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
        {errors.diet && <span className="text-red-500">{errors.diet}</span>}
      </div>
    </div>
  );
}

export default HealthSection;
