CREATE TABLE items (
    id BIGSERIAL PRIMARY KEY,
    bid BIGSERIAL NOT NULL,
    oid BIGSERIAL NOT NULL,
    FOREIGN KEY ("bid") REFERENCES "burgers" ("id") ON DELETE CASCADE,
    FOREIGN KEY ("oid") REFERENCES "orders" ("id") ON DELETE CASCADE,
    quantity INT,
    price NUMERIC
);