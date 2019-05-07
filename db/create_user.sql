insert into admin (username, password, first_name. last_name)
values
($1, $2, $3)
returning *;