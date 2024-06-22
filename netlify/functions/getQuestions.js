// netlify/functions/getQuestions.js
const questions = {
    Technology: [
      { id: 1, question: "What programming languages do you use?" },
      { id: 2, question: "How many years of experience do you have?" }
    ],
    Health: [
      { id: 1, question: "How often do you exercise?" },
      { id: 2, question: "What type of diet do you follow?" }
    ],
    Education: [
      { id: 1, question: "What is your highest qualification?" },
      { id: 2, question: "What field of study are you in?" }
    ]
  };
  
  exports.handler = async (event, context) => {
    const topic = event.queryStringParameters.topic;
    return {
      statusCode: 200,
      body: JSON.stringify(questions[topic] || []),
    };
  };
  