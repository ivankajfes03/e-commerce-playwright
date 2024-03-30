import { expect, test } from '@playwright/test';

test('List Users - GET Request fetches correct data structure on page 2', async ({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    const responseBody = await response.json()

    expect(response.status()).toBe(200)
    expect(responseBody.page).toBe(2)
    expect(responseBody.data.length).toBeGreaterThan(0)

    expect(responseBody).toHaveProperty('page')
    expect(responseBody).toHaveProperty('per_page')
    expect(responseBody).toHaveProperty('total')
    expect(responseBody).toHaveProperty('total_pages')
    expect(responseBody).toHaveProperty('data')

    responseBody.data.forEach(user => {
        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('email')
        expect(user).toHaveProperty('first_name')
        expect(user).toHaveProperty('last_name')
        expect(user).toHaveProperty('avatar')
    });
})

test('Create User - Post Request successfully creates a user', async ({request}) => {
    const newUserData = {
        name: 'ivan',
        job: 'QA'
    }

    const response = await request.post('https://reqres.in/api/users', {
        data: newUserData
    })
    const responseBody = await response.json();

    expect(response.status()).toBe(201)
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('name', newUserData.name);
    expect(responseBody).toHaveProperty('job', newUserData.job);
    expect(responseBody).toHaveProperty('createdAt');
})

test('Update User - Put Request successfully updates a user', async ({request}) => {
    const updatedUserData = {
        name: 'ivan updated',
        job: 'QA updated'
    }

    const response = await request.put('https://reqres.in/api/users/2', {
        data: updatedUserData
    })
    const responseBody = await response.json()

    expect(response.status()).toBe(200)
    expect(responseBody).toHaveProperty('name', updatedUserData.name);
    expect(responseBody).toHaveProperty('job', updatedUserData.job);
    expect(responseBody).toHaveProperty('updatedAt');
})