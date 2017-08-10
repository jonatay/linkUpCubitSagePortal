-- Table: fims.period

DROP TABLE fims.period;

CREATE TABLE fims.period
(
  id serial NOT NULL,
  year integer,
  month integer,
  when_received timestamp,
  rows_received integer,
  must_refresh boolean DEFAULT false,
  account character varying(10),
  CONSTRAINT period_pk PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE fims.period
  OWNER TO postgres;
