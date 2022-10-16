--DATABASE NAME: OQX_app
---DO NOT DROP-----------
DROP TABLE "category";
DROP TABLE "sponsor";
DROP TABLE "donationLevels";
DROP TABLE "resources";
DROP TABLE "user";
--------------------------

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
    VALUES ('Political/Legal'), ('Medical/Scientific'), ('Business/Cultural');
    

CREATE TABLE "donationLevels" (
"id" SERIAL PRIMARY KEY,
"tiers" VARCHAR (1000) NOT NULL
);

INSERT INTO "donationLevels" ("tiers")
	VALUES ('gold'), ('silver'), ('bronze');

CREATE TABLE "resources" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (1000) NOT NULL,
"phoneNumber" VARCHAR (1000),
"address" VARCHAR (1000),
"category_id" INT REFERENCES "category"
);

INSERT INTO "resources" ("name", "phoneNumber", "address", "category_id")
VALUES  ('Lawful Lawfirms', '(612)-123-4567', '123 Business Street, Minneapolis, MN', 1),
		('Healthy Happenings', '(612) 345-6789', '456 Wellness Ave, St.Paul, MN', 2),
		('The Culture Business', '(612) 678-9123', '789 Boulevard Lane, Minneapolis, MN', 3);

CREATE TABLE "sponsor" (
"id" SERIAL PRIMARY KEY,
"company" VARCHAR (1000) NOT NULL,
"image" VARCHAR (1000),
"levelOfDonation" INT REFERENCES "donationLevels"
);

INSERT INTO "sponsor" ("company", "image", "levelOfDonation")
VALUES ('Crown Sponsor', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_satisf.png', 1),
	('Silver', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_gear.png', 2),
	('Silver', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_gear.png', 2),
	('Silver', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_gear.png', 2),
	('Bronze', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_circle.png', 3),
	('Bronze', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_circle.png', 3),
	('Bronze', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_circle.png', 3),
	('Bronze', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_circle.png', 3),
	('Bronze', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_circle.png', 3),
	('Bronze', 'https://atelierlks.com/wp-content/uploads/2020/10/99gen_circle.png', 3);
--------------------------------------------------------------------------------------------









---RESET--------------------------------------------------------------------------------------
DROP TABLE "stories";
DROP TABLE "timeline";

---CREATE TIMELINES---
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

INSERT INTO "timeline" ("title", "date", "image", "info", "references", "category_id", "authorized")
VALUES 
-- POLITICS
('The Stonewall Riots.', '06/28/1969', 'https://news.harvard.edu/wp-content/uploads/2019/06/Stonewall-Gay-liberation-1024x683.jpg', 'information', 'references', 1, true),
('Harvey Milk', '06/28/1978', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Harvey_Milk_at_Gay_Pride_San_Jose%2C_June_1978_%28cropped%29.jpg/440px-Harvey_Milk_at_Gay_Pride_San_Jose%2C_June_1978_%28cropped%29.jpg', 'When he won the election to the San Francisco Board of Supervisors in 1977, Harvey
Milk made history as the first openly gay elected official in California, and one of the
first in the United States. His camera store and campaign headquarters at 575 Castro
Street (and his apartment above it) were centers of community activism for a wide
range of human rights, environmental, labor, and neighborhood issues. During his
tenure as supervisor, he helped pass a gay rights ordinance for the city of San
Francisco that prohibited anti-gay discrimination in housing and employment.', 'references', 1, true),
('National March on Washington for Lesbian and Gay Rights', '06/28/1969', 'image', 'information', 'references', 1, true),
('March on Washington', '10/14/1979', 'https://gaycenter.org/wp-content/uploads/2018/02/archive_c014.jpg', 'Marches on Washington, D.C. can serve many functions: to protest peacefully, to
make visible the commitment and volume of support behind a movement, to
mobilize and nationalize otherwise more fractured, local efforts to organize. The
LGBTQ community and its allies have marched on the nation''s capital on numerous
occasions, beginning with a march and rally that took place on October 14, 1979.', 'references', 1, true),

-- MEDICAL
('The HIV/AIDS Epidemic', '01/01/1980', 'image', 'The United States was the focal point of the HIV/AIDS epidemic of the 1980s. The
disease was first noticed en masse by doctors who treated gay men in Southern
California, San Francisco, and New York City in 1981. When cases of AIDS first
emerged in the U.S., they tended to originate among either men who had sex with
other men, hemophiliacs, and heroin users. The prevalence of the disease among gay
men in the U.S. in the 80s and 90s initially resulted in a stigma against homosexuals
and a general fear and misunderstanding regarding how AIDS was spread. However,
as celebrities like Rock Hudson and Freddie Mercury revealed that they had the
disease, and Magic Johnson came forward with HIV, and dedicated his retirement to
educating others about the virus, attitudes began to change.', 'references', 2, true),
('The American Psychiatric Association Lists homosexualtiy as a mental disorder ', '01/01/1980', 'image', 'The American Psychiatric Association lists homosexuality as a sociopathic personality disturbance in its first publication of the Diagnostic and Statistical Manual of Mental Disorders. Immediately following the manual''s release, many professionals in medicine, mental health and social sciences criticize the categorization due to lack of empirical and scientific data.', 'references', 2, true),
('Understanding AIDS', '01/01/1980', 'image', 'The CDC mails a brochure, Understanding AIDS, to every household in the U.S. Approximately 107 million brochures are mailed.', 'references', 2, true),
('Title', '01/01/1980', 'image', 'information', 'references', 2, true),

-- BUSINESS 
('Executive Order banning homosexuals from working for the Federal Government', '01/01/1980', 'image', 'President Dwight Eisenhower signs Executive Order 10450, banning homosexuals from working for the federal government or any of its private contractors. The Order lists homosexuals as security risks, along with alcoholics and neurotics.', 'references', 3, true),
('National March on Washington', '01/01/1980', 'image', 'An estimated 75,000 people participate in the National March on Washington for Lesbian and Gay Rights. LGBT people and straight allies demand equal civil rights and urge for the passage of protective civil rights legislature.', 'references', 3, true),
('Wisconsin outlaws discrimination', '01/01/1980', 'image', 'Wisconsin becomes the first U.S. state to outlaw discrimination on the basis of sexual orientation.', 'references', 3, true),
('Don''t Ask Don''t Tell', '01/01/1980', 'image', 'The U.S. Senate votes 65-31 to repeal "Don''t Ask, Don''t Tell" policy, allowing gays and lesbians to serve openly in the U.S. Military.', 'references', 3, true);


CREATE TABLE "stories" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "story" VARCHAR (65535) NOT NULL,
    "authorized" BOOLEAN DEFAULT FALSE,
    "timeline_id" INT REFERENCES "timeline"
);