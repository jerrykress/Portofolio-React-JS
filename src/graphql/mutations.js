/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      accountID
      abbr
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      accountID
      abbr
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      accountID
      abbr
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
      project {
        id
        accountID
        abbr
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
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
      project {
        id
        accountID
        abbr
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
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
      project {
        id
        accountID
        abbr
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
          nextToken
          startedAt
        }
      }
    }
  }
`;
