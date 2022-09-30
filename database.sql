-- Database name OQX_app

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT FALSE,
    "18+" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "categoryName" VARCHAR (100) NOT NULL
);

INSERT INTO "category" ("categoryName")
    VALUES ('Political/Legal');
INSERT INTO "category" ("categoryName")
    VALUES ('Medical/Scientific');
INSERT INTO "category" ("categoryName")
    VALUES ('Business/Cultural');

CREATE TABLE "timeline" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (100) NOT NULL,
    "date" DATE NOT NULL,
    "image" VARCHAR (1000),
    "info" VARCHAR (65535),
    "references" VARCHAR (10000),
    "category_id" INT REFERENCES "category",
    "authorized" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "stories" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "story" VARCHAR (65535) NOT NULL,
    "authorized" BOOLEAN DEFAULT FALSE,
    "timeline_id" INT REFERENCES "timeline"

);