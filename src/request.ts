import axios from 'axios';

// export function getGitHubAPI(userid: string): Promise<any> {
//   return axios.get('https://api.github.com/users/' + userid);
// }

export async function getTodoList(id: number, title: string): Promise<any> {
  return await axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      id,
      title,
    },
  });
}
