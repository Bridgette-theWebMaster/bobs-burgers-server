BEGIN;

TRUNCATE users RESTART IDENTITY CASCADE;

INSERT INTO users ( name, email, password ) 
    VALUES 
    ('Bob', 'Bob@bobsburgers.com', '$2b$10$Iy2G/sbfNY4YdMrXwxCJMetfoEXOjlLJxOQN5sK2SSiQPTnpJ55xa'),
    ('Louise', 'Louise@bobsburgers.com','$2b$10$RO/x8DiOhyW2eYqYfvenlOHCW9sM9nx4pcc7q54peqyCFRZFqlTmW');

    COMMIT;