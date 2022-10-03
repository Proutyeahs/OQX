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

INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '1/1/1948', 'image', 'Sexual Behavior in the Human Male, statistical study published by A.C. Kinsey. ', 'references', 2);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '4/27/1952', 'image', 'President Dwight D. Eisenhower signs an executive order that bans homosexual people from working for the federal government, saying they are a security risk.', 'references', 1);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '1/1/1952', 'image', 'Sexual Behavior in the Human female, statistical study published  by A.C. Kinsey. ', 'references', 2);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '7/1/1961', 'image', 'Illinois becomes the first state to decriminalize homosexuality by repealing their sodomy laws.                           ', 'references', 1);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '9/11/1961', 'image', 'The Rejected aired.  This was the first US-televised documentary about homosexuality airs on a local station in California.', 'references', 3);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '1/1/1968', 'image', 'DSM-II (Diagnostic & Statistical Manual of Mental Health Disorders considered homosexiality a mental health disorder ', 'references', 2);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '6/28/1969', 'image', 'Police raid the Stonewall Inn in New York City. Protests and demonstrations begin, and it later becomes known as the impetus for the gay civil rights movement in the United States.', 'references', 1);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '1/1/1973', 'image', 'Maryland becomes the first state to statutorily ban same-sex marriage.', 'references', 1);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '1/1/1973', 'image', 'The American Psychiatric Association removed homosexuality as a mental disorder, but replaced it with "sexual orientation disturbance."', 'references', 2);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '1/1/1987', 'image', 'The APA published the DSM-III-R,. In this edition, the ego-dystonic homosexuality classification was removed. In its place, persistent and marked distress about ones sexual orientation was added.', 'references', 2);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '6/26/2014', 'image', 'the U.S. Supreme Court struck down all state bans on same-sex marriage, legalized it in all fifty states, and required states to honor out-of-state same-sex marriage licenses in the case Obergefell v. Hodges.', 'references', 1);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '1/1/2021', 'image', 'The Tampa Bay Buccaneers have signed outside linebacker Carl Nassib, who became the NFLs first active player to come out as gay. ', 'references', 3);
    INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id")
    VALUES ('title', '6/24/2022', 'image', 'Supream Court overturned Roe v Wade ', 'references', 1);