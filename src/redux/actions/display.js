export function selectPage(page, parameter = null){
    return {
        type: 'PAGE_SELECTED',
        page,
        parameter
    }
}