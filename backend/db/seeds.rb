# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

mentors = [{
  name: "梅雨"
}, {
  name: "ささしゅん"
}, {
  name: "ぎる"
}, {
  name: "けいたん"
}, {
  name: "ちょす"
}]

mentors.each do |mentor|
  Mentor.create(name: mentor[:name])
end

members = [{
  name: "suika",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/29120/mini_magick20210827-21429-esrgvk.jpg",
  goal: "",
}, {
  name: "kotoha",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/29954/mini_magick20221019-5188-181syj.jpg",
  goal: "",
  }, {
  name: "akkun",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/30677/mini_magick20230329-20510-38m2iq.jpg",
  goal: "",
}, {
  name: "natsuki",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/31130/mini_magick20230315-15713-c5p1ch.png",
  goal: "",
}, {
  name: "kishimoto",
  img: "https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/31219/mini_magick20230328-20510-flx9r6.jpg",
  goal: "",
}]

members.each do |member|
  Mentor.find(1).members.create(name: member[:name], img: member[:img], goal: member[:goal])
end

courses = [{
  name: "iPhone",
}, {
  name: "WebS"
}, {
  name: "WebD"
}, {
  name: "Unity"
}]

courses.each do |course|
  Course.create(name: course[:name])
end
