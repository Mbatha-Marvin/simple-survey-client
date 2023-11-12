import axios from 'axios'
import * as XmlParser from '$lib/helpers/processXmlResponse'



export const load = async () => {

    const getQuestions = async () => {
        const questionsUrl: string = 'http://localhost:8001/api/questions'

        const { data } = await axios.get(questionsUrl)
        const questionsJson = XmlParser.parseQuestions(data)

        return questionsJson;


    }


    return {
        questions: await getQuestions(),
    }



}