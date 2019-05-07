insert into user (email, password,first_name,last_name)
values ($1,$2,$3,$4)
returning *;