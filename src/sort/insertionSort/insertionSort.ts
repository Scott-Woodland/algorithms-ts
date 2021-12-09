import { SortAlgorithm } from "../common";
import swap from "../swap";

const insertionSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    // Your code here
    let i = 0;
    let sortlist = [items[i]];
    let swapstore;
    let index = 0;
    i++;
    while (i < items.length){
        sortlist.push(items[i]);
        index = sortlist.length-1;
        while (index > 0) {
            if(sortlist[index] < sortlist[index-1]){
                swapstore = sortlist[index];
                sortlist[index] = sortlist[index-1];
                sortlist[index-1] = swapstore;
            }
            index--;
        }
        i++
    }
    items = sortlist;
    return items;
}
export default insertionSort;