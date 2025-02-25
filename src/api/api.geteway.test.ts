import { execSync } from 'child_process'
import { getData } from './api.gateway'

describe('Name of the group', () => {
  it('should return 200', async () => {
    const expected = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    }

    const response = await getData()

    expect(response).toEqual(expected)
  })
})
