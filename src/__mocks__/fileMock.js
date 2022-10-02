import { ONE_MB } from "../constants"

// __mocks__/fileMock.js
export const MockedDescription = {
    jobLinkId: 1451,
    code: '4KGQ5SRD',
    jobTitle: 'GraphStax',
    description: '<p>This is a sample description for GrtaphStax</p><ul class="list-disc pl-8"><li><p>point 1</p></li><li><p>point 2</p></li></ul>',
    inviteTitle: null,
    inviteMessage: null,
    companyCountry: 'CAN',
    companyCity: 'Toronto',
    companyProvince: 'ON',
    workModel: 'HYBRID',
    companyOrName: 'Workwolf',
    active: true,
    contentType: '',
    fileName: '',
    brand: '',
    careerFitScore: null,
    incompleteScreenerQuestions: null
}

export const MockedFile = {
    lastModified: 1655128841062,
    lastModifiedDate: "Mon Jun 13 2022 11:00:41 GMT-0300 (Brasilia Standard Time)",
    name: "MockedFileExample.pdf",
    size: 70619,
    type: "application/pdf",
    webkitRelativePath: ""
}

export const MockedBigFile = {
    lastModified: 1655128841062,
    lastModifiedDate: "Mon Jun 13 2022 11:00:41 GMT-0300 (Brasilia Standard Time)",
    name: "MockedBigFileExample.pdf",
    size: ONE_MB * 5, //5MB
    type: "application/pdf",
    webkitRelativePath: ""
}