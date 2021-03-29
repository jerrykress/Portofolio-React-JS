import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Tasks {
  readonly id: string;
  readonly text?: string;
  readonly notes?: string;
  readonly day?: string;
  readonly reminder?: boolean;
  readonly priority?: number;
  readonly completed?: boolean;
  readonly project?: number;
  readonly weight?: number;
  readonly participants?: string;
  constructor(init: ModelInit<Tasks>);
  static copyOf(source: Tasks, mutator: (draft: MutableModel<Tasks>) => MutableModel<Tasks> | void): Tasks;
}