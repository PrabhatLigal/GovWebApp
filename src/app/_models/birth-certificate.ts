export class BirthCertificate {

    _id: string;

    givenName: string;
    surname: string;
    birthDate: Date;
    birthPlace: string;
    sex: string;
    
    fatherGivenName: string;
    fatherSurname: string;
    fatherBirthDate: Date;

    motherGivenName: string;
    motherSurname: string;
    motherBirthDate: Date;
    informatName: string;
    informantDesc: string;

    status: boolean;
}