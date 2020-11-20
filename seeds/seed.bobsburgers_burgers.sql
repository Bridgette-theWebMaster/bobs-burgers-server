BEGIN;

TRUNCATE burgers RESTART IDENTITY CASCADE;

INSERT INTO burgers ( name, description, price, photo, count) 
    VALUES 
    ('Home Sweet Avocado', 'All beef patty smothered in sweet lime sauce and topped with fresh avocado, sweet onion, tomato, peppers and stevia. Served on a whole wheat bun.', 5.95, 'https://i.ibb.co/VSXr6Vg/avocado.png', 0),
    ('Beet-er Late Than Never', 'Red beet patty topped with lettuce, relish, tomatoes, pickled beets, and garlic aioli. Served on a whole wheat bun.', 5.95, 'https://i.ibb.co/Msxt12n/beet.png', 0)),
    ('Bohemian Radishy', 'All beef patty and swiss cheese slathered in honey dijon mustard sauce topped with pickled radish and yellow pepper relish. Served on a sunflower honey oat roll.', 5.95, 'https://i.ibb.co/0snNWyp/bohemian.png', 0)),
    ('Dont You Four Cheddar Bout Me', 'Angus beef patty stuffed with horseradish cheddar and sharp yellow cheddar, topped with mild yellow and sharp white cheddar, crispy bacon, lettuce, and onion. Served on a pretzel bun.', 5.95, 'https://i.ibb.co/kXg0tG3/cheddar.png', 0)),
    ('Baby You Can Chive My Car', 'All beef patty stuffed with feta cheese and topped with diced chives and a creamy sour cream & mustard spread. Served on a chive-tastic bun. Comes with fried pickle wheels.', 5.95, 'https://i.ibb.co/Lr5Cxsx/chive.png', 0)),
    ('Mission A-corn-plished', 'All beef patty seasoned with a taco blend topped with sweet corn salsa and arugula. Served on a Vienna roll', 5.95, 'https://i.ibb.co/DpYnn7k/corn.png', 0)),
    ('Eggers Cant Be Cheesers', 'All beef patty topped with lettuce, tomato, American cheese, and a fried egg smothered in hot sauce. Served on a maple bun.', 5.95, 'https://i.ibb.co/1QvdW57/egg.png', 0)),
    ('Gourdon Hamsey', 'Fried ham patty topped with tomato, lettuce, smoked gouda, and fried squash. Served on a sesame bun.', 5.95, 'https://i.ibb.co/CmPvck8/ham.png', 0)),
    ('If Looks Could Kale', 'Impossible burger topped with dairy-free gruyere topped with garlic roasted kale, tomatoes and avocado spread. Served on a whole wheat bun.', 5.95, 'https://i.ibb.co/6bqr23n/kale.png', 0)),
    ('Olive And Let Die', 'All beef patty topped with provolone cheese, lettuce, tomato, olive tapenade and garlic aioli crowned with an olive skewer. Served on a whole wheat bun.', 5.95, 'https://i.ibb.co/gJmCgR1/olive.png', 0)),
    ('Peas And Thank You', 'All beef patty topped with Swiss cheese, lettuce, tomato, garlic aioli and peas. Served on a sesame bun.', 5.95, 'https://i.ibb.co/VB41cTt/peas.png', 0)),
    ('Hit Me With Your Best Shallot', 'All beef patty seasoned with thyme topped with caramelized shallots, lettuce, tomato and smothered in a creamy cherve spread. Served on a french roll. ', 5.95, 'https://i.ibb.co/6JnWN2q/shallot.png', 0));

    COMMIT;