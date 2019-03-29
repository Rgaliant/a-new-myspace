200.times do
  username = Faker::Name.name 
  email = Faker::Internet.email
  address = Faker::Address.state
  gender = Faker::Gender.binary_type
  bio = Faker::Movies::StarWars.quote
  avatar = Faker::Avatar.image
  Person.create(username: username, email: email, address: address, gender: gender, bio: bio, avatar: avatar)
end

puts "200 People Seeded"
