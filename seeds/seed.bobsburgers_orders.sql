BEGIN;

TRUNCATE orders RESTART IDENTITY CASCADE;

INSERT INTO orders ( uid, order_date) 
    VALUES 
    ( 'e1c1e65d-7c2a-4c61-98ac-545fb7b4ecab', '2001-12-23 14:39:53.66-05');

    COMMIT;