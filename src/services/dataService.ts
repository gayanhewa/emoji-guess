import data from './source.json';

const getQuestions: any = () => {
    return [...data.questions]
}

export {getQuestions};
