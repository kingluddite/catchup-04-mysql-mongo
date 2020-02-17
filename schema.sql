# Create our Database
CREATE DATABASE FosterAgency;

# Use our Database
USE FosterAgency;

# Create our Database table
CREATE TABLE Dogs(
  id INT AUTO_INCREMENT,
  dog_name VARCHAR(255),
  breed VARCHAR(255),
  entry_date DATE,
  PRIMARY KEY (id)
) 
