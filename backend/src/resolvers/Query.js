const Query = {
    dogs(parent, args, ctx, info) {
        return [{ name: 'Snickers' }, { name: 'Sunny' }, { name: 'Dangkong' }];
    }
};

module.exports = Query;
