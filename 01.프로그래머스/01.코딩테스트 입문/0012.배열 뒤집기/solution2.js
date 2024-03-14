function solution2(num_list) {
    let num_list_reverse = [];
    for(let i = num_list.length - 1; i >= 0; i--) {
        num_list_reverse[num_list.length - 1 - i] = num_list[i];
    }
    return num_list_reverse;
}
