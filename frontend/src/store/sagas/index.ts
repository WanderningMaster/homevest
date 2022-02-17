import { watchLoginSaga } from "./user";

export default function* rootSaga() {
    yield watchLoginSaga();
}