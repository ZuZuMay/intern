async function createUser(userInfo) {
    try {
        const createdUser = await this.User.create(userInfo);
        console.log(createdUser);
        return createdUser;
    } catch (error) {
        console.error(error)
        throw error;
    }
}
const createdUser = await createUser(userInfo);