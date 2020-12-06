const paginate = (page, limit, model) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = model.slice(startIndex, endIndex);
    return result;
}

module.exports = { paginate }
