import { NameSpace } from "../../const";
import { State } from "../../types";


export const getOrderStatus = (state: State) => state[NameSpace.Order].isOrderPosted;
