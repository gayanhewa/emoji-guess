import data from './source.json';

// Deal with the types later.
// interface Question {
//     challenge: string;
//     hint: string;
//     tag: string[];
// }

// type Questions = Question[];

const getQuestions: any = () => {
    return data.questions;
}

export {getQuestions};
