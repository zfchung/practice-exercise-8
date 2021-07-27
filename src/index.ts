import { getTodoList } from './request';

// getGitHubAPI('zfchung').then(console.log);
getTodoList(1, 'delectus aut autem').then((res) => console.log(res));
