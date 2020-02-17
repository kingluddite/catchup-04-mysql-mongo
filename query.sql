# Query the table

# Select everything from the table
SELECT * FROM Dogs;

# Select one column from the dogs table
SELECT dog_name FROM Dogs;

# Delete all dogs from the Dogs table where the breed equals 'Spaniel';
DELETE FROM Dogs WHERE breed = 'Spaniel';

# MySQL error code: 1175 during UPDATE in MySQL Workbench
# ref - https://stackoverflow.com/questions/11448068/mysql-error-code-1175-during-update-in-mysql-workbench
# SET SQL_SAFE_UPDATES = 0;

# Let's return to the slideshow
