\echo 'Delete and recreate auth_starter db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE student_store;
CREATE DATABASE student_store;
\connect student_store;

\i student-store-schema.sql

\echo 'Delete and recreate studnet_store_test db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE student_store_test;
CREATE DATABASE student_store_test;
\connect student_store_test;

\i student-store-schema.sql

\i student-store-seed.sql 
