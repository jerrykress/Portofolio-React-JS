# React Task Tracker

A simple project management and task tracking system built using React JS and styled with Tailwind CSS. All components have been made from scratch. All UI elements are responsive and interactive.

# Features

This system contains three main components: Task Tracker, Project Tracker and Calendar.

## Task Tracker

![alt text](https://github.com/jerrykress/ReactJS-Project-Tracker/blob/main/screenshots/task-page.png?raw=true)

In addition to being able to add titles and notes to each task:

- Each task can be assigned a priority including low, mid and high.
- Each task can be assigned a project and a weight associated with this project.
- Each task can be highlighted to show on top of the page.
- Tasks marked as completed will show at the bottom of page until completely deleted.
- Double click on a task to view or change the details.

Additional features:

- Sorting tasks by alphabetical order, priority level and due time.
- Filtering tasks by projects.
- Recover a completed task back to todo status.

## Project Tracker

![alt text](https://github.com/jerrykress/ReactJS-Project-Tracker/blob/main/screenshots/project-page-date.png?raw=true)

Create and manage projects with the following attributes:

- Adding projects with title, start date and end date.
- Assigning projects with value points.
- Adding participants to the project.

Double click on a project to view and edit:

- Project details.
- Tasks assigned to this project.
- Progress bar which indicates whether project is on time or behind schedule based on project end time and task completion percentage.

Additional features:

- Sorting tasks with in projects by alphabetical order, priority level and due time.
- Sorting projects by alphabetical order, end time and overall value.
- Setting the overlay information on the project banner to project value, progress percentage or acronym.

## Calendar

![alt text](https://github.com/jerrykress/ReactJS-Project-Tracker/blob/main/screenshots/calendar-page.png?raw=true)

A fully functional monthly calendar written from scratch, supported by Moment JS.

- Navigation includes: previous month, next month and back to today.
- Calendar height is adjustable through a set of buttons of top when needed to display more task thumbnails.
- Display all tasks below the calendar given a selected cell in the calendar.
- Marking tasks as complete right from the calendar page.

## Date Handling

Date and time inside this project is stored internally by Moment JS. Parsing of the time is handled by a custom script which accepts some natural expressions such as:

- Today at 12.
- Tomorrow at 14:30.
- Aug 14 at 9:15.
- 2077 March 6 at 12 45

# Running Locally

The version on the **main** branch uses react component states to store its values for UI demo purposes only. Data is not persistent and will reset after a refresh.

    > To use this version of the project, pull the repository and perform npm start.

# Deployed Version

The code for the deployed version of this project is available on the **aws** branch supported by **Amplify** and **GraphQL**.
Visit website here: [React Todo Online Demo](https://aws.d3t0l5fc0bu395.amplifyapp.com/)

The deployed system includes some additional features such as:

- User registration and authentication.
- Email verification and password reset.
- Persistent data storage for all tasks and projects.
