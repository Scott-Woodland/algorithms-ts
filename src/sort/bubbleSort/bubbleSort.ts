import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    let top = items.length;
    let current = 0;
    let sorts = 1;
    let swapstore;

    while (sorts > 0){
        sorts = 0;
        current = 0;
        while(current != top){

            if(items[current] > items[current+1]){
                swapstore = items[current];
                items[current] = items[current+1]
                items[current+1] = swapstore;
                sorts++;
            }
            current++;
        }
        top--;
    }
    return items;
}

export default bubbleSort;