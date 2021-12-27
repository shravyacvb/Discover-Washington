function Profile({ user }) {
    if (user.username !== '') {
        return <div className="profile-details" >
            <p>Name: {user.name}</p>
            <p>UserName: {user.username}</p>
            <p>email: {user.email}</p>
        </div>
    }
    return null;
}

export default Profile;