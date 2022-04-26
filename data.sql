CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(100) NOT NULL,
    description TEXT,
    price INT NOT NULL,
    picture VARCHAR(255)
);

INSERT INTO product (name, category, description, price, picture) VALUES ('Iphone', 'Phone', 'best Iphone ever seen','1000', 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg');
INSERT INTO product (name, category, description, price, picture) VALUES ('Ipad', 'Tablette', 'best Ipad ever seen','800', 'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg');
INSERT INTO product (name, category, description, price, picture) VALUES ('Imac', 'Computer', 'best Imac ever seen','1500', 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg');
INSERT INTO product (name, category, description, price, picture) VALUES ('Macbook', 'Computer', 'best Macbook ever seen','2000', 'https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg');
INSERT INTO product (name, category, description, price, picture) VALUES ('Iwatch', 'Phone', 'best Iwatch ever seen','500', 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg');