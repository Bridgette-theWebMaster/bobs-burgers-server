CREATE TABLE burgers (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC NOT NULL,
    photo TEXT NOT NULL,
    count NUMERIC NOT NULL
);