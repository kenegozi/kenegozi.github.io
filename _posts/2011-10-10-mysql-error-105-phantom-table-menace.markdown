---
layout: post
title:  "MySQL error 105 - Phantom Table Menace"
comments: true
tags: [tools,nhibernate]
---

MySQL is weird
The weirdest problem happened to a college today.

When creating the database schema during integration tests run, he got “Cannot create table FOO error 105” from MySQL.

There *used* to be a table named FOO with a VARCHAR primary key. The schema then changed so that the primary key of FOO became BIGINT. There is also a second table in the system (call it BAR) which has a foreign-key into FOO's primary key. A classic master/details scenario.

However, the table BAR was obsoleted from the schema.

The integration tests runner is dropping all tables and recreating them before running the test suite. It is inferring the schema from the persisted classes using NHibernate's mapper and the Schema creation feature of NHibernate.
Sleeves up
We cranked open the mysql console and started to look around:
- When doing “SHOW TABLES”, the FOO table was not listed.
- CREATE TABLE FOO (`Id` BIGINT) - fail with error 105.
- CREATE TABLE FOO (`Id` VARCHAR) – success !!
- huh?
- DROP TABLE FOO – success
- encouraging !
- CREATE TABLE FOO (`Id` BIGINT) - fail with error 105 – again
- huh ???
- DROP TABLE FOO – fail with “cannot delete … foreign key …”
- but SHOW TABLES still does not list FOO 
- huh ?????
- DROP DATABASE dev; CREATE DATABASE dev;
- now everything works.
Back to work
Luckily this was not a production database, and even more lucky – the said DB change (change that PK from VARVHAR to BIGINT) would need to run on production within a separate DB instance that can be recreated on deploy.



## And while we're at it

Way can't MySQL store non-indexed columns in an index?

