import userStore from '../../state/user';

export default function User () {
    const user = userStore(state => state.user)
    const updateUser = userStore(state => state.update)

    const setUser = (value, field) => {
        const newUser = {...user, [field]: value}
        updateUser(newUser)
    }

    return <>
    <div className=''>
    <input className='bg-gray-300 p-2 m-2' value={user.name} onChange={e => setUser(e.target.value, 'name')}></input> <br />
    <input className='bg-gray-300 p-2 m-2' value={user.email} onChange={e => setUser(e.target.value, 'email')}></input>
    </div>
    </>
}