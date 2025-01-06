export type ExperienceWithId = Experience & {id: number}

export type Experience = {
  startTime: string;
  endTime: string;
  title: string;
  enterprise: string;
  content: Content;
}

type Content = {
  context: string;
  project: string;
  tasks: Task[];
}

type Task = {
  taskId: number;
  taskItem: string;
}

let experiencesCount = 0

export const qDelftExperience: ExperienceWithId = {
  id: ++experiencesCount,
  startTime: 'qDelft.start-time',
  endTime: 'qDelft.end-time',
  title: 'qDelft.title',
  enterprise: 'qDelft.enterprise',
  content: {
    context: 'qDelft.content.context',
    project: 'qDelft.content.project',
    tasks: [
      {taskId: 1, taskItem: 'qDelft.content.tasks.1'},
      {taskId: 2, taskItem: 'qDelft.content.tasks.2'},
    ]
  }
}

export const avivAngularExperience: ExperienceWithId = {
  id: ++experiencesCount,
  startTime: 'avivAngular.start-time',
  endTime: 'avivAngular.end-time',
  title: 'avivAngular.title',
  enterprise: 'avivAngular.enterprise',
  content: {
    context: 'avivAngular.content.context',
    project: 'avivAngular.content.project',
    tasks: [
      {taskId: 1, taskItem: 'avivAngular.content.tasks.1'},
      {taskId: 2, taskItem: 'avivAngular.content.tasks.2'},
      {taskId: 3, taskItem: 'avivAngular.content.tasks.3'},
      {taskId: 4, taskItem: 'avivAngular.content.tasks.4'},
      {taskId: 5, taskItem: 'avivAngular.content.tasks.5'},
    ]
  }
}

export const avivReactExperience: ExperienceWithId = {
  id: ++experiencesCount,
  startTime: 'avivReact.start-time',
  endTime: 'avivReact.end-time',
  title: 'avivReact.title',
  enterprise: 'avivReact.enterprise',
  content: {
    context: 'avivReact.content.context',
    project: 'avivReact.content.project',
    tasks: [
      {taskId: 1, taskItem: 'avivReact.content.tasks.1'},
      {taskId: 2, taskItem: 'avivReact.content.tasks.2'},
      {taskId: 3, taskItem: 'avivReact.content.tasks.3'},
      {taskId: 4, taskItem: 'avivReact.content.tasks.4'},
      {taskId: 5, taskItem: 'avivReact.content.tasks.5'},
    ]
  }
}

export const cvAppExperience: ExperienceWithId = {
  id: ++experiencesCount,
  startTime: 'cvApp.start-time',
  endTime: 'cvApp.end-time',
  title: 'cvApp.title',
  enterprise: 'cvApp.enterprise',
  content: {
    context: 'cvApp.content.context',
    project: 'cvApp.content.project',
    tasks: [
      {taskId: 1, taskItem: 'cvApp.content.tasks.1'},
      {taskId: 2, taskItem: 'cvApp.content.tasks.2'},
      {taskId: 3, taskItem: 'cvApp.content.tasks.3'},
      {taskId: 4, taskItem: 'cvApp.content.tasks.4'},
      {taskId: 5, taskItem: 'cvApp.content.tasks.5'},
    ]
  }
}