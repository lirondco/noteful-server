module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://pdgquyfyixqyxw:1f4faab63c7cf0338291d3e5dd38d77a14227dffd2a76ee385ee066bbe58e9e5@ec2-52-72-190-41.compute-1.amazonaws.com:5432/d5bmonrep5nmap',
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/blogful'
}