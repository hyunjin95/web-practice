const handleGetProfile = db => (req, res) => {
    const { id } = req.params;
    
    db.select('*').from('users').where({id})
        .then(user => {
            if (user.length) {
                res.json(user[0]);
            }
            else {
                res.status(400).json('Not found')
            }
        })
        .catch((err) => res.status(400).json(err));
};

const handleProfileUpdate = db => (req, res) => {
    const { id } = req.params;
    const { name } = req.body.formInput;

    db('users').where({id}).update({ name }).then(resp => {
        if (resp) {
            res.json("success");
        }
        else {
            res.status(400).json('fail to update');
        }
    })
    .catch((err) => res.status(400).json(err));
};


module.exports = {
    handleGetProfile: handleGetProfile,
    handleProfileUpdate: handleProfileUpdate
};