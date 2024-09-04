## Things to remember for an Interview

### Keys
- Primary
  - Unique identifier in each row of data in a table
- Foreign
  - Links to another table's PK to establish a relationship. (1-1, 1-M, M-M).  This key may repeat.

### Normalization
- The key, the whole key, and nothing but the key
    - pneumonic for remembering first, second and third normal forms
### Relationships
- 1-To-1
  - PK in table A directly relates to FK in table B.  No duplicates in either tables.
- 1-To-Many
  - PK in table A relates to FK in table B.  FK in table B can have duplicates.
- Many-To-Many
  - Need three tables to make this work (linking or bridge tables) connects two main tables.  Example: Table A with student_id field links to bridge table with student_id and course_id. Course_id in bridge table links to course_id in Course table.  Creating a many-to-many relationship.  The Student and Course tables have a bridge table link between them that will contain student_id and course_id. The bridge table will have be the many side of both of the relationship connections. 

### DDL (Data Definition Language)
- Create
  - create database <name>, create table <name>
- Show databases     -- show all the database on the the MySQL server
- Use <databaseName> -- to make the database the default for queries
- Constraints
```
    -- Join
    SELECT Table1.column1, Table1.column2, Table2.Column1 
        FROM table1
        [Join type] JOIN table2 ON [Relationship condition]
        WHERE [Filter Condition];
```
  - Foreign key constraint
    - Foreign key <FKName(optional)> references <tableName>(<PKName>)

- Safe_updates
  - SET SQL_SAFE_UPDATES = 0;  -- disable safe updates
  - SET SQL_SAFE_UPDATES = 1;  -- enable safe updates


### DML (Data Manipulation Language)
- CRUD (Select, Insert, Update, Delete)
- Basic queries
- Join queries
- Aggregate queries

### ACID Compliance
- Atomicity
- Consistency
- Integrity
- Durability