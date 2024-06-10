const connection = require('../config/connection');

class Usuario {

    static getAllUsers(callback) {
        connection.query('SELECT id, username FROM usuarios', (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    }

    static addUser(username, password, callback) {
        connection.query('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, password], (err) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }

    static getTotalUsers(callback) {
        connection.query('SELECT COUNT(*) AS total FROM usuarios', (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                const totalUsers = results[0].total;
                callback(null, totalUsers);
            }
        });
    }
}

// Função para reorganizar os índices após a exclusão de um usuário
function reorganizeUserIndices(callback) {
    connection.query('SET @count = 0', (err, result) => {
        if (err) {
            callback(err);
        } else {
            connection.query('UPDATE usuarios SET id = @count:= @count + 1', (err, result) => {
                if (err) {
                    callback(err);
                } else {
                    connection.query('ALTER TABLE usuarios AUTO_INCREMENT = 1', (err, result) => {
                        if (err) {
                            callback(err);
                        } else {
                            callback(null);
                        }
                    });
                }
            });
        }
    });
}
    
module.exports = Usuario;
