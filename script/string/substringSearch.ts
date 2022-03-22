interface substringSearchValue {
    string: string,
    substring: string,
}

export const substringSearch = ({string, substring}:substringSearchValue) => {
    return string.toLowerCase().indexOf(substring.toLowerCase()) === -1 ? false : true;
}