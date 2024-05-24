const connection = require('../connection');

const list = function(req, res, next) {
    const queryParams = req.query;
    connection.getConnection()
        .then(async (trades) => {
            const fields = Object.keys(trades.rawAttributes);
            for (const param of Object.keys(queryParams)) {
                if (!fields.includes(param)) {
                    return []
                }
            }
            return trades.findAll({
                where: {
                    ...queryParams
                }
            });
        })
        .then(trades => {
            res.send(trades);
        })
        .catch(error => {
            console.error(error);
            res.send(error);
        });
};

const create = function(req, res, next) {
    connection.getConnection()
        .then(trades => {
            const trade = trades.build(req.body);
            return trade.validate();
        })
        .then(async (trade) => {
            const result = await trade.save();
            return res.status(201).send(result);
        })
        .catch(error => {
            console.error(error);
            return res.status(400).send(error);
        });
};

const entity = function(req, res, next) {
    if (req.method === 'GET') {
        connection.getConnection()
            .then(async (trades) => {
                const trade = await trades.findByPk(req.params.id);
                if (!trade) {
                    return res.status(404).send('ID not found');
                }
                res.send(trade);                    
            })
            .catch(error => {
                console.error(error);
                res.send(error);
            });
    } else {
        return res.sendStatus(405);
    }
};

module.exports = {
    list,
    create,
    entity
}