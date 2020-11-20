BEGIN;

TRUNCATE items RESTART IDENTITY CASCADE;

INSERT INTO items ( bid, oid, quantity, price) 
    VALUES 
    ('10', '1', '4', '5.95'),
    ('5', '1', '2', '5.95');

    COMMIT;