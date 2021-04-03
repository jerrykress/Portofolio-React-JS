import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Project {
  readonly id: string;
  readonly accountID?: string;
  readonly abbr: string;
  readonly name: string;
  readonly color: string;
  readonly startTime: (number | null)[];
  readonly endTime: (number | null)[];
  readonly participants?: (string | null)[];
  readonly value: number;
  readonly tasks?: (Task | null)[];
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

export declare class Task {
  readonly id: string;
  readonly projectID?: string;
  readonly project?: Project;
  readonly title: string;
  readonly text: string;
  readonly time: (number | null)[];
  readonly reminder: boolean;
  readonly priority: number;
  readonly completed: boolean;
  readonly weight: number;
  readonly participants?: (string | null)[];
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}