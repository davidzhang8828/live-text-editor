const { Pool } = require('pg');
// const URL = 'postgres://kenhgyvo:tmusXooNdnmQ35ja1k8ILimiD5oIj0yn@drona.db.elephantsql.com:5432/kenhgyvo'; //old link
const URL = 'postgres://oanlyhvz:N45cjLgEPkHsy6THtYUNBDum8zJllEF1@drona.db.elephantsql.com:5432/oanlyhvz'
const pool = new Pool({ connectionString: URL });

pool.on('connect', () => {
  console.log('Connected to the database');
});

module.exports = {
  query: (query, params, cb) => {
    console.log(`this is the query: ${query}`);
    return pool.query(query, params, cb);
  }
}

/*
"user_project" schema
create table user_project (
_id serial not null,
user_id int not null,
project_id int not null,
primary key (_id),
foreign key (user_id) references users (user_id),
foreign key (project_id) references projects (project_id)
)


 */