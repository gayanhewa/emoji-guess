import { Q } from '../components/Question';
import data from './source.json';

const getQuestions: any = () => {
    return [...data.questions]
}

export {getQuestions};
