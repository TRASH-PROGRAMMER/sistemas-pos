const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: '123456',
    database: 'Ex-markert'
});

client.connect()
    .then(() => {
        console.log('✅ Conexión exitosa a PostgreSQL!');
        return client.query('SELECT version()');
    })
    .then(result => {
        console.log('Versión de PostgreSQL:', result.rows[0].version);
        client.end();
    })
    .catch(err => {
        console.error('❌ Error de conexión:', err.message);
        console.error('Detalles:', err);
        client.end();
    });
