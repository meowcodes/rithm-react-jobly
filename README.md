## Jobly

Jobly is a web application for posting, viewing, and applying to job applications.

### Routes

Path | Component
:--- | :--------
/ | Home
/register | Login
/login | Login
/companies | Companies
/companies/:handle | Company
/jobs | Jobs
/profile | Profile

### Component Architecture

```
App
└─┬─ NavBar
  └┬ Routes
   ├── Home
   ├── Login
   └─┬ PrivateRoutes 
     ├─┬ Companies
     │ ├── Search
     │ └── CompanyCard 
     ├─┬ Company
     │ └── JobCard 
     ├─┬ Jobs
     │ ├── Search
     │ └── JobCard
     └── Profile
```