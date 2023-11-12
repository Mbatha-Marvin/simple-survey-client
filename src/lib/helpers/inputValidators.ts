import * as EmailValidator from 'email-validator';

export const validateUserEmail = (email: string) => {
    return EmailValidator.validate(email);
};

export const validateUserNames = (fullName: string) => {
    if (typeof fullName === 'string' && fullName.trim().length >= 9) {
        return true;
    } else {
        return false;
    }
};

export const validateUserDescription = (description: string) => {
    if (typeof description === 'string' && description.trim().length >= 30) return true;
    else {
        return false;
    }
};

export const validateUserGender = (gender: string) => {
    if (typeof gender === 'string' && gender.trim().length >= 4) return true;
    else {
        return false;
    }
};

export const validateProgrammingStackString = (programmingStackString: string) => {
    if (typeof programmingStackString === 'string' && programmingStackString.trim().length > 0) {
        return true;
    } else {
        return false;
    }
};

export const validateFilesUpload = (files: FileList) => {
    if (files && files.length > 0) return true;
    else {
        return false;
    }
};

// const fieldValidators = {
//     validateUserEmail,
//     validateUserNames,
//     validateUserDescription,
//     validateUserGender,
//     validateProgrammingStackString,
//     validateFilesUpload
// };

// export default fieldValidators;
