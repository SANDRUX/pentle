const FindUser = (dest, src) =>
{
    const FilterUser = dest.filter(element => element.name === src.name)
    
    return (FilterUser.length === 0) ? false : true
}

module.exports = { FindUser }