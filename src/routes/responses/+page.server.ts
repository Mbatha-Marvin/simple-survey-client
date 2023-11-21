import axios from 'axios'
import * as XmlParser from '$lib/helpers/processXmlResponse'



export const load = async () => {

    const getResponses = async () => {
        const responsesUrl: string = 'http://localhost:8001/api/questions/responses'

        const { data } = await axios.get(responsesUrl)
        const questionsJson = XmlParser.parseResponses(data)

        return questionsJson;


    }


    return {
        responses: await getResponses(),
    }

}
