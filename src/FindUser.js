const FindUser = (dest, src) =>
{
    const FilterUser = dest.filter(element => element.name === src.name)
    
    return (FilterUser.length === 0) ? false : FilterUser[0]
}

module.exports = { FindUser }