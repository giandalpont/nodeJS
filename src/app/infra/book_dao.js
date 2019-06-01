/* 
    Class faz a conexão com o banco de dados 
*/

class BookDao {
    
    constructor(db) {
        this._db = db
    }

    list(callback){
        this._db.all(
            'SELECT * FROM livros',
            ( err, results )=>
                callback( err, results)
            
        )
    }

}

module.exports = BookDao 