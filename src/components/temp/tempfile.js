

const [questions, setTopics] = useState([])

useEffect(() => {
    props.getQuestions()
    setTopics(props.questions)
    const matched_question = questions.filter(question => question.id == match.params.id)
    setPayload({...payload,
    topic: matched_question.length > 0 ? matched_question[0].topic : '',
content: matched_question.length > 0 ? matched_question[0].content: ''})
    
}, [questions])