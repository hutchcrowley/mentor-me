import React, { useState, useEffect } from "react";

const QuestionEdit = props => {
  const [topic, setTopic] = useState([]);

  return (
    <form>
      <label htmlFor="topic">Topic</label>
      <select>
        <option value={topic[0]}>Video Editing</option>
        <option value={topic[1]}>Small Business</option>
        <option value={topic[2]}>Programming</option>
        <option value={topic[3]}>Photography</option>
      </select>
      <label htmlFor="questions">Questions</label>
      <input type="text" placeholder="type your question here" />
    </form>
  );
};

export default QuestionEdit;
