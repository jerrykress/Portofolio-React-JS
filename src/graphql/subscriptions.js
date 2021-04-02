/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
      id
      abbreviation
      name
      color
      startTime
      endTime
      participants
      value
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          projectID
          title
          text
          time
          reminder
          priority
          completed
          weight
          participants
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
      id
      abbreviation
      name
      color
      startTime
      endTime
      participants
      value
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          projectID
          title
          text
          time
          reminder
          priority
          completed
          weight
          participants
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
      id
      abbreviation
      name
      color
      startTime
      endTime
      participants
      value
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tasks {
        items {
          id
          projectID
          title
          text
          time
          reminder
          priority
          completed
          weight
          participants
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      projectID
      title
      text
      time
      reminder
      priority
      completed
      weight
      participants
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      projectID
      title
      text
      time
      reminder
      priority
      completed
      weight
      participants
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      projectID
      title
      text
      time
      reminder
      priority
      completed
      weight
      participants
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;