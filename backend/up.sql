
CREATE TABLE IF NOT EXISTS public.race_updates
(
    id               SERIAL,
    race_action      TEXT,
    race_action_time TEXT,
    modified         TIMESTAMP
);