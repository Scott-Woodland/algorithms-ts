import { NO_MATCH } from "../common"
let lastIndex = -2;

const binarySearch = (items: any[], item: any): number => {
    let min = 0;
    let max = items.length;
    for (let i = items.length/2; i != lastIndex; i = Math.floor(min+((max-min)/2))) {
            if (item === items[i]){
                return i;
            }
            else if (item < items[i]){
                max = i;
            }
            else if (item > items[i]){
                min = i;
            }
            lastIndex = i;
    }        
    return NO_MATCH;
}

export default binarySearch;