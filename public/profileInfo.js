export function ProfileInfo() {
  const myProfileData = {
    name: "Ateafack Nora",
    profilePicUrl: `${process.env.PUBLIC_URL}/my-profile-pic.jpg`,
    age: 90,
    bio: "Interested in React",
    birthday: "July 16",
    interests: ["programming", "Cyber Security", "Graphic Design"],
  };
  return (
    <div>
      <img
        src={myProfileData.profilePicUrl}
        alt={`${myProfileData.name} smiling`}
        height="200"
      />
      <h2>My Profile</h2>
      <h3>Name</h3>
      <p>{myProfileData.name}</p>
      <h3>Age</h3>
      <p>{myProfileData.age}</p>
      <h3>Bio</h3>
      <p>{myProfileData.bio}</p>
      <h3>Birthday</h3>
      <p>{myProfileData.birthday}</p>
      <h3>Interests</h3>
      <p>{myProfileData.interests.join(",")}</p>
    </div>
  );
}
