CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
("url", "title", "description")
VALUES
('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
('images/coffee.webp', 'Coffee', 'Daily Necessity'),
('images/DallasCowboysIMG.avif', 'Dallas Cowboys', 'Americas Team'),
('images/goldendoodle.png', 'Golden Doodle', 'Breed of my dog'),
('images/dachsand.webp', 'Weiner Dog', 'Breed of my dog');
  