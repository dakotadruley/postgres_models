DROP TABLE IF EXISTS apples;

CREATE TABLE apples (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    color TEXT CHECK (color = ANY('{red, green, yellow}')),
    size TEXT CHECK (size = ANY('{small, medium, large, xLarge}')),
    is_rotten BOOLEAN
);