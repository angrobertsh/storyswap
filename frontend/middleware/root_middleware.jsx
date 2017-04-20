import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import QuestionMiddleware from './question_middleware';

const RootMiddleware = applyMiddleware(SessionMiddleware, QuestionMiddleware);

export default RootMiddleware;
