export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;