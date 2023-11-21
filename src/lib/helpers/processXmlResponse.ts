import { XmlElement, parseXml, type JsonObject } from '@rgrove/parse-xml';

export type fullName = {
    title: string,
    displayText: string
}
export type emailAddress = {
    title: string,
    displayText: string
}
export type description = {
    title: string,
    displayText: string
}
export type gender = {
    title: string,
    displayText: string
    multiple: boolean
    genderOptionsText: string[]
    genderOptionsValues: string[]
}
export type programmingStack = {
    title: string,
    displayText: string
    multiple: boolean
    programmingStackOptionsText: string[]
    programmingStackOptionsValues: string[]
}
export type certificate = {
    title: string,
    displayText: string
    multiple: boolean
    fileType: string
    maxFileSize: string
    maxFileSizeUnit: string
}

export type questions = {
    fullName: fullName,
    emailAddress: emailAddress,
    description: description,
    gender: gender,
    programmingStack: programmingStack,
    certificate: certificate
}


export const parseQuestions = (questionXml: string) => {
    const parsedXml = parseXml(questionXml).children as XmlElement[];
    const questionsJson = parsedXml[0].toJSON()

    // fullName
    const fullNameQuestionAttributes = questionsJson.children[0].attributes as JsonObject
    const fullNameQuestionValues = questionsJson.children[0].children[0] as JsonObject;
    const fullNameText = fullNameQuestionValues.children[0].text.toString()
    // const fullNameType = fullNameQuestionValues.children[0].type.toString()
    const fullNameTitle = fullNameQuestionAttributes.name.toString()

    // console.log("\n################# Full Name Details #####################\n");
    // console.log(fullNameText);
    // console.log(fullNameType);
    // console.log(fullNameTitle);

    // email parsing
    const emailAddressQuestionAttributes = questionsJson.children[1].attributes as JsonObject
    const emailAddressQuestionValues = questionsJson.children[1].children[0] as JsonObject;
    const emailAddressText = emailAddressQuestionValues.children[0].text.toString()
    // const emailAddressType = emailAddressQuestionValues.children[0].type.toString()
    const emailAddressTitle = emailAddressQuestionAttributes.name.toString()


    // console.log("\n################# Email Address Details #####################\n");
    // console.log(emailAddressText);
    // console.log(emailAddressType);
    // console.log(emailAddressTitle);

    // description parsing
    const descriptionQuestionAttributes = questionsJson.children[2].attributes as JsonObject
    const descriptionQuestionValues = questionsJson.children[2].children[0] as JsonObject;
    const descriptionText = descriptionQuestionValues.children[0].text.toString()
    // const descriptionType = descriptionQuestionValues.children[0].type.toString()
    const descriptionTitle = descriptionQuestionAttributes.name.toString()

    // console.log("\n################# Description Details #####################\n");
    // console.log(descriptionText);
    // console.log(descriptionType);
    // console.log(descriptionTitle);

    // gender parsing
    const genderQuestionAttributes = questionsJson.children[3].attributes as JsonObject
    const genderQuestionValues = questionsJson.children[3].children[0] as JsonObject;
    const genderSelectOptions = questionsJson.children[3].children[2] as JsonObject;
    const genderSelectOptionsAttributes = genderSelectOptions.attributes as JsonObject
    const genderSelectOptionsParent = genderSelectOptions.children as JsonObject[];


    let genderSelectionMultiple: boolean;
    if (genderSelectOptionsAttributes.multiple.toString() == 'yes') {
        genderSelectionMultiple = true
    } else {
        genderSelectionMultiple = false;
    }

    const genderOptionsText: string[] = []
    const genderOptionsValues: string[] = []
    for (let index = 0; index < genderSelectOptionsParent.length; index++) {
        const optionText = genderSelectOptionsParent[index].children as JsonObject[]
        const optionValue = genderSelectOptionsParent[index].attributes as JsonObject

        genderOptionsText.push(optionText[0].text.toString())
        genderOptionsValues.push(optionValue.value.toString())
    }

    const genderText = genderQuestionValues.children[0].text.toString()
    // const genderType = genderQuestionValues.children[0].type.toString()
    const genderTitle = genderQuestionAttributes.name.toString()

    // console.log("\n################# Gender Details #####################\n");
    // console.log(genderText);
    // console.log(genderType);
    // console.log(genderTitle);
    // console.log(genderSelectionMultiple);
    // console.log(genderOptionsText);
    // console.log(genderOptionsValues);
    // console.log(genderSelectOptions);


    // programming Stack parsing
    const programmingStackQuestionAttributes = questionsJson.children[4].attributes as JsonObject
    const programmingStackQuestionValues = questionsJson.children[4].children[0] as JsonObject;
    const programmingStackSelectOptions = questionsJson.children[4].children[2] as JsonObject;
    const programmingStackSelectOptionsAttributes = programmingStackSelectOptions.attributes as JsonObject
    const programmingStackSelectOptionsParent = programmingStackSelectOptions.children as JsonObject[];

    const programmingStackOptionsText: string[] = []
    const programmingStackOptionsValues: string[] = []
    for (let index = 0; index < programmingStackSelectOptionsParent.length; index++) {
        const optionText = programmingStackSelectOptionsParent[index].children as JsonObject[]
        const optionValue = programmingStackSelectOptionsParent[index].attributes as JsonObject

        programmingStackOptionsText.push(optionText[0].text.toString())
        programmingStackOptionsValues.push(optionValue.value.toString())
    }




    let programmingStackSelectionMultiple: boolean;
    if (programmingStackSelectOptionsAttributes.multiple.toString() == 'yes') {
        programmingStackSelectionMultiple = true
    } else {
        programmingStackSelectionMultiple = false;
    }

    const programmingStackText = programmingStackQuestionValues.children[0].text.toString()
    // const programmingStackType = programmingStackQuestionValues.children[0].type.toString()
    const programmingStackTitle = programmingStackQuestionAttributes.name.toString()

    // console.log("\n################# Programming Stack Details #####################\n");
    // console.log(programmingStackText);
    // console.log(programmingStackType);
    // console.log(programmingStackTitle);
    // console.log(programmingStackSelectionMultiple);
    // console.log(programmingStackOptionsText);
    // console.log(programmingStackOptionsValues);

    // certification Files Upload
    const certificateQuestionAttributes = questionsJson.children[5].attributes as JsonObject
    const certificateQuestionValues = questionsJson.children[5].children[0] as JsonObject;
    const certificateSelectOptions = questionsJson.children[5].children[2] as JsonObject;
    const certificateSelectOptionsAttributes = certificateSelectOptions.attributes as JsonObject
    // const certificateSelectOptionsParent = certificateSelectOptions.children as JsonObject[];


    let certificateSelectionMultiple: boolean;
    if (certificateSelectOptionsAttributes.multiple.toString() == 'yes') {
        certificateSelectionMultiple = true
    } else {
        certificateSelectionMultiple = false;
    }

    const certificateFileType = certificateSelectOptionsAttributes.format.toString()
    const certificateMaxFileSize = certificateSelectOptionsAttributes.max_file_size.toString()
    const certificateMaxFileSizeUnits = certificateSelectOptionsAttributes.max_file_size_unit.toString()

    const certificateText = certificateQuestionValues.children[0].text.toString()
    // const certificateType = certificateQuestionValues.children[0].type.toString()
    const certificateTitle = certificateQuestionAttributes.name.toString()

    // console.log("\n######################### Certificate ##########################\n");
    // console.log(certificateText);
    // console.log(certificateType);
    // console.log(certificateTitle);
    // console.log(certificateSelectionMultiple);
    // console.log(certificateFileType);
    // console.log(certificateMaxFileSize);
    // console.log(certificateMaxFileSizeUnits);



    const questions: questions = {
        "fullName": {
            "title": fullNameTitle,
            "displayText": fullNameText
        },
        "emailAddress": {
            "title": emailAddressTitle,
            "displayText": emailAddressText
        },
        "description": {
            "title": descriptionTitle,
            "displayText": descriptionText
        },
        "gender": {
            "title": genderTitle,
            "displayText": genderText,
            "multiple": genderSelectionMultiple,
            "genderOptionsText": genderOptionsText,
            "genderOptionsValues": genderOptionsValues

        },
        "programmingStack": {
            "title": programmingStackTitle,
            "displayText": programmingStackText,
            "multiple": programmingStackSelectionMultiple,
            "programmingStackOptionsText": programmingStackOptionsText,
            "programmingStackOptionsValues": programmingStackOptionsValues

        },
        "certificate": {
            "title": certificateTitle,
            "displayText": certificateText,
            "multiple": certificateSelectionMultiple,
            "fileType": certificateFileType,
            "maxFileSize": certificateMaxFileSize,
            "maxFileSizeUnit": certificateMaxFileSizeUnits

        }
    }


    // console.log(questionsJson);

    return questions;
}

export const parseResponses = (responseXml: string) => {

    const parsedXml = parseXml(responseXml).children as XmlElement[];
    const responseJson = parsedXml[0].toJSON();

    const questionResponsesRootAttributes = responseJson.attributes as JsonObject;
    const questionResponsesCurrentPage = questionResponsesRootAttributes.current_page.toString();
    const questionResponsesLastPage = questionResponsesRootAttributes.last_page.toString();
    const questionResponsesPageSize = questionResponsesRootAttributes.page_size.toString();
    const questionResponsesTotalCount = questionResponsesRootAttributes.total_count.toString();

    const responsesList = responseJson.children as JsonObject[];

    const questionResponseList = [];



    for (let i = 0; i < responsesList.length; i++) {
        const questionResponseBaseElements = responsesList[i].children as JsonObject[]

        const singleResponse = {}

        for (let j = 0; j < questionResponseBaseElements.length - 2; j++) {
            // full name
            const fieldTitle = questionResponseBaseElements[j].name.toString()
            // console.log(fieldTitle);

            const questionResponseBaseFullNameValue = questionResponseBaseElements[j].children as JsonObject[]
            // console.log(questionResponseBaseFullNameValue[0].text.toString());

            singleResponse[fieldTitle] = questionResponseBaseFullNameValue[0].text.toString()
        }

        // certificates
        const certificateBaseElementsList = questionResponseBaseElements[questionResponseBaseElements.length - 2].children as JsonObject[]

        const certificateList = []
        for (let i = 0; i < certificateBaseElementsList.length; i++) {
            const certificateElementValue = certificateBaseElementsList[i].children[0].text as string;
            // console.log(certificateElementValue);
            certificateList.push(certificateElementValue)
        }

        singleResponse["certificates"] = certificateList;

        const dateRespondedBase = questionResponseBaseElements[questionResponseBaseElements.length - 1].children[0].text as string;

        singleResponse["dateResponded"] = dateRespondedBase

        questionResponseList.push(singleResponse)

    }

    // responses list
    const responses = {
        "currentPage": questionResponsesCurrentPage,
        "lastPage": questionResponsesLastPage,
        "pageSize": questionResponsesPageSize,
        "totalCount": questionResponsesTotalCount,
        "questionResponses": questionResponseList
    }

    return responses
}