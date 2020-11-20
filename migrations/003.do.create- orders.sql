CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    user_id uuid NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE,
    order_date TIMESTAMP DEFAULT now() NOT NULL
);

